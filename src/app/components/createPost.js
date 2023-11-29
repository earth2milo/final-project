const express = require('express');
const bodyParser = require('body-parser');
const db = firestore.getFirestore();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let posts = []; // Mock database - Replace with a real database like MongoDB, Firebase Firestore, etc.

// Endpoint to create a new post
app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Endpoint to retrieve all posts
app.get('/api/posts', (req, res) => {
  res.status(200).json(posts);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
