import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password doesn't match." });
    }
    const existingUser = await User.findOne({ username });

    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyprofilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const user = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender == "male" ? boyprofilePicture : girlprofilePicture,
    });
    await user.save();
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullname,
      username: user.username,
      gender: user.gender,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User doesn't exist." });

    console.log(user);
    const isPasswordCorrect = await bcrypt.compareSync(
      password,
      user.password || ""
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      gender: user.gender,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
