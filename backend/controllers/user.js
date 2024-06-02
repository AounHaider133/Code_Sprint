const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  try {
    const id = req.params.id;
    const updatedUser = req.body;
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ message: "User deleted successfully" });
}

async function handleCreateNewUser(req, res) {
  try {
    const newUser = req.body;

    // Check if all required fields are provided
    if (
      !newUser.fullName ||
      !newUser.username ||
      !newUser.email ||
      !newUser.phone ||
      !newUser.password ||
      !newUser.confirmPassword
    ) {
      return res
        .status(400)
        .json({ message: "Bad request. Please provide all required fields." });
    }

    // Check if password and confirmPassword match
    if (newUser.password !== newUser.confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if a user with the same email, username, or phone already exists
    const existingUser = await User.findOne({
      $or: [
        { email: newUser.email },
        { username: newUser.username },
        { phone: newUser.phone },
      ],
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with given credentials already exists" });
    }

    // Remove the confirmPassword field from the newUser object
    const { confirmPassword, ...userWithoutConfirmPassword } = newUser;

    // Create the new user
    const result = await User.create(userWithoutConfirmPassword);
    return res.status(201).json({
      message: "User created successfully",
      id: result._id,
      user: userWithoutConfirmPassword,
    });
  } catch (error) {
    console.error("Error creating new user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function handleLogin(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required." });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    return res
      .status(200)
      .json({ message: "Login successful", userId: user._id });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  handleLogin,
};
