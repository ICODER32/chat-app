import User from "../models/user.model.js";
export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getUserForSidebar: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
