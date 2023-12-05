// const users = require("../utils/users");

// module.exports = (req, res) => {
//   const { email, password } = req.query;
//   let access = false;

//   users.forEach((user) => {
//     if (user.email === email && user.password === password) access = true;
//   });
//   res.status(200).json({ access: true });
// };

const users = require("../utils/users");

module.exports = (req, res) => {
  const { email, password } = req.query;
  let access = false;

  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  });

  if (access) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};
