const firebaseApp = require('./firebaseConfig'); // Import Firebase configuration


// Function to get user profile details
const getUserProfile = async (userId) => {
  try {
    const userDoc = await firestore.collection('users').doc(userId).get();
    if (!userDoc.exists) {
      throw new Error('User profile not found');
    }
    const userProfile = userDoc.data();
    return userProfile;
  } catch (error) {
    throw new Error(`Error fetching user profile: ${error.message}`);
  }
};

// Function to update user profile details (example: updating email)
const updateUserProfile = async (userId, newEmail) => {
  try {
    await firestore.collection('users').doc(userId).update({ email: newEmail });
    return true; // Profile updated successfully
  } catch (error) {
    throw new Error(`Error updating user profile: ${error.message}`);
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
