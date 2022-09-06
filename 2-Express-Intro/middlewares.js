const userMiddleware = (req, res, next) => {
  const urlArray = req.url.split("/");
  const username = urlArray[urlArray.length - 1];
  if (username === "skillsafari") {
    next();
  } else {
    res.send("<h1>Not Authorized</h1>");
  }
};

module.exports = userMiddleware;
