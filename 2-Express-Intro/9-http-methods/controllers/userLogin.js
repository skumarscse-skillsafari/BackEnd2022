export const getLoginUser = (req, res) => {
  const { username } = req.query;
  if (username === "skillsafari") {
    return res.status(200).send(`<h1>Welcome, ${username.toUpperCase()}`);
  }
  return res.status(404).send("<h1>Not Authorized</h1>");
};
