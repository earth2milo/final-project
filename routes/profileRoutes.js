

const express = require('express');
const router = express.Router();
const firebaseApp = require('../controllers/firebaseConfig');
const profileController = require('../controllers/profileController'); // Import the profile controller

// Route to get user profile details
router.get('/profile/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const userProfile = await profileController.getUserProfile(userId);
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update user profile details (example: updating email)
router.put('/profile/:userId', async (req, res) => {
  const { userId } = req.params;
  const { newEmail } = req.body;
  try {
    const result = await profileController.updateUserProfile(userId, newEmail);
    if (result) {
      res.status(200).json({ message: 'Profile updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more routes for updating other profile information if needed

module.exports = router;
