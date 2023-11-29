const firebaseApp = require('../controllers/firebaseConfig');

// Function to register (create) a new user
const registerUser = async (email, password) => {
  try {
    const userCredential = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    return userCredential.user.uid; // Return the user's unique ID
  } catch (error) {
    throw new Error(`Error registering user: ${error.message}`);
  }
};

// Function to get user details by ID
const getUserById = async (userId) => {
  try {
    const userRecord = await firebaseApp.auth().getUser(userId);
    return userRecord.toJSON(); // Return user details
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

// Function to delete a user by ID
const deleteUserById = async (userId) => {
  try {
    await firebaseApp.auth().deleteUser(userId);
    return true; // User deleted successfully
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

module.exports = {
  registerUser,
  getUserById,
  deleteUserById,
};
