const userMiddleware = (req, res, next) => {
  // console.log(req.query);
  const { username } = req.query;
  if (username === "skillsafari") {
    next();
  } else {
    res.send("<h1>Not Authorized</h1>");
  }
};

module.exports = userMiddleware;
