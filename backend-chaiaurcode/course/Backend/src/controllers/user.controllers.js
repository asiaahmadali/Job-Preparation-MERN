import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, fullname, email, password } = req.body;
  console.log(username, email);
});

// user se email, username, password lt gy
// password ko encrypt kry gy
// tokens generet kry gy

export default registerUser;
