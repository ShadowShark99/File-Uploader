exports.getFilesPage = (req, res) => {
  res.render("files", {user: req.user});
};