


// Import necessary Firebase modules or configurations
const firebaseApp = require('../controllers/firebaseConfig'); // Import Firebase configuration

// Function to create a new post
const createPost = async (userId, postData) => {
  try {

    
    const postsRef = firebaseApp.database().ref(`posts/${userId}`).push();
    await postsRef.set({
      userId,
      ...postData,
      createdAt: firebaseApp.database.ServerValue.TIMESTAMP,
    });
    return postsRef.key; // Return the unique key of the post
  } catch (error) {
    throw new Error(`Error creating post: ${error.message}`);
  }
};

// Function to get all posts by a user
const getUserPosts = async (userId) => {
  try {
    // Fetch posts for a specific user from Firebase
    // For example, if using Firebase Realtime Database:
    const snapshot = await firebaseApp.database().ref(`posts/${userId}`).once('value');
    const userPosts = snapshot.val();
    return userPosts ? Object.values(userPosts) : []; // Return an array of user's posts
  } catch (error) {
    throw new Error(`Error fetching user posts: ${error.message}`);
  }
};

// Function to delete a post by post ID
const deletePost = async (userId, postId) => {
  try {
    // Delete a specific post from Firebase
    await firebaseApp.database().ref(`posts/${userId}/${postId}`).remove();
    return true; // Post deleted successfully
  } catch (error) {
    throw new Error(`Error deleting post: ${error.message}`);
  }
};



module.exports = {
  createPost,
  getUserPosts,
  deletePost,
};
