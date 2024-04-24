export const sendMessage = async (req, res) => {
  console.log(req.user);
  const { id } = req.params;
  const { userId } = req.user;
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
