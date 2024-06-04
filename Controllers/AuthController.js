const Model = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Key = process.env.KEY;

// create admin user
exports.register = async (req, res) => {
  try {
    const data = Model(req.body);

    const foundUser = await Model.findOne({
      email: data.email,
    });
    if (foundUser) {
      return res.status(302).json({ message: "Email aleady exist!" });
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = new Model({
      email: data.email,
      ogpass: data.password,
      password: hashedPassword,
      status: data.status,
      auth: data.auth,
    });
    const inserted = await Model.create(user);
    return res
      .status(200)
      .json({ message: "Register Successfully", data: inserted });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error, Refresh and try again !" });
  }
};

// Admin Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User Not found !" });
    }
    if (user.status === false) {
      return res.status(401).json({ error: "Access Denied" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(404).json({ error: "Please Check Password" });
    }

    const token = jwt.sign({ email: user.email }, Key, {
      expiresIn: "1d",
    });
    res.status(200).json({
      email: user.email,
      userToken: token,
      expired: user.expired,
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed Refresh and try agian !!" });
  }
};

// find admin
exports.findloger = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await Model.findOne({ email: email });

    if (!user) {
      return user.status(404);
    }
    return res.status(200).json({ data: { email: user.email, id: user._id } });
  } catch (error) {
    res.status(500).json({ error: "Login failed Refresh and try agian !!" });
  }
};

// change password  email
exports.forgetPassword = async (req, res) => {
  const data = Model(req.body);
  const { newpass } = req.body;
  const user = await Model.findOne({ email: data.email });
  try {
    if (newpass) {
      const datas = req.body;

      const newHashPassword = await bcrypt.hash(newpass, 10);
      const data = await Model.findByIdAndUpdate(user._id, {
        email: datas.email,
        ogpass: newpass,
        pass: newHashPassword,
        status: datas.status,
        expired: data.expired,
        startexpired: data.startexpired,
      });

      return res.status(200).json({ message: "Update Detailss", data: data });
    } else {
      const newd = await Model.findByIdAndUpdate(user._id, {
        status: data.status,
        expired: data.expired,
        startexpired: data.startexpired,
      });

      return res.status(200).json({ message: "Update Details", data: newd });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Forget Password failed Refresh and try again !!" });
  }
};
