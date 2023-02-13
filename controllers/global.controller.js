class globalController {
  getHome = (req, res) => {
    return res.render("index");
  };
}

module.exports = globalController;
