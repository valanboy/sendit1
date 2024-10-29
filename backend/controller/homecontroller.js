
const home_GET = (req, res) => {
    res.render("index");
};

const signup_GET = (req, res) => {
    res.render("signup",{
        error:""
    });
};

const signin_GET = (req, res) => {
    res.render("signin",{
        error: ""
    });
};


module.exports = {home_GET, signup_GET, signin_GET}