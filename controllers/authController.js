const firebaseApp = require('../controllers/firebaseConfig');

// Function to sign in a user with email and password
const signInUser = async (email, password) => {
  try {
    const userCredential = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    return user.uid; // Return the user's unique ID
  } catch (error) {
    throw new Error(`Error signing in user: ${error.message}`);
  }
};

// Function to send a password reset email
const sendPasswordResetEmail = async (email) => {
  try {
    await firebaseApp.auth().sendPasswordResetEmail(email);
    return true; // Password reset email sent successfully
  } catch (error) {
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};

module.exports = {
  signInUser,
  sendPasswordResetEmail,
};
