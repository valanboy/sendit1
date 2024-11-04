const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const Parcel = require("../models/parcel");
const sendMail = require("../helpers/sendmail");

const sendParcelDliveredEmail = async () => {
  const parcels = await Parcel.find({ status: 2 });

  if (parcels.length > 0) {
    for (let parcel of parcels) {
      ejs.renderFile(
        "templates/deliveredparcel.ejs",
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
            subject: "Your parcel has been delivered",
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
        "templates/deliveredparcel.ejs",
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
            to: parcel.recipientemailemail,
            subject: "Your parcel has been delivered",
            html: data,
          };

          try {
            await sendMail(messageoption);
            await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 3 } });
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  }
};

module.exports = { sendParcelDliveredEmail
 };