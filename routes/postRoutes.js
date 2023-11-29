

const express = require('express');
const router = express.Router();
const postModel = require('../models/Post'); // Import the post model

// Route to create a new post
router.post('/create/:userId', async (req, res) => {
  const { userId } = req.params;
  const postData = req.body;
  try {
    const postId = await postModel.createPost(userId, postData);
    res.status(201).json({ message: 'Post created successfully', postId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all posts by a user
router.get('/user/:userId/posts', async (req, res) => {
  const { userId } = req.params;
  try {
    const userPosts = await postModel.getUserPosts(userId);
    res.status(200).json(userPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a post
router.delete('/delete/:userId/:postId', async (req, res) => {
  const { userId, postId } = req.params;
  try {
    const result = await postModel.deletePost(userId, postId);
    if (result) {
      res.status(200).json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more routes for updating or managing posts as needed

module.exports = router;
