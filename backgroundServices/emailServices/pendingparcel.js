const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const Parcel = require("../models/parcel");
const sendMail = require("../helpers/sendmail");

const sendParcelPendingEmail = async () => {
  const parcels = await Parcel.find({ status: 0 });

  if (parcels.length > 0) {
    for (let parcel of parcels) {
      ejs.renderFile(
        "templates/pendingparcel.ejs",
        {
          
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.senderemail,
            subject: "Your parcel is being processed and is pending",
            html: data,
          };

          try {
            await sendMail(messageoption);
          } catch (error) {
            console.log(error);
          }
        }
      );

      ejs.renderFile(
        "templates/pendingparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.recipientemail,
            subject: "You've got a parcel",
            html: data,
          };

          try {
            await sendMail(messageoption);
            await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 1 } });
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  }
};

module.exports = { sendParcelPendingEmail };