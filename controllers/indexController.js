const passport = require("passport");

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

exports.login = passport.authenticate("local", {
  successRedirect: "/files",
  failureRedirect: "/"
});


exports.getHome = (req,res) => {
  res.render("index");
};
