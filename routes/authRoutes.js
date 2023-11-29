
const express = require('express');
const router = express.Router();
const user = require('../models/user'); // Import the user model

// Route to handle user signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userId = await user.createUser(email, password);
    res.status(201).json({ message: 'User created successfully', userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





// Route to handle user deletion
router.delete('/delete/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await user.deleteUserById(userId);
    if (result) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
