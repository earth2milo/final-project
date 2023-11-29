
// init 

const express = require('express');
const app = express();
const firebaseApp = require('./controllers/firebaseConfig');
const firebase = require('firebase-admin');
const bodyParser = require('body-parser');
const session = require('express-session');

// routes

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const postRoutes = require('./routes/postRoutes');


// Initialize Firebase Admin SDK

const serviceAccount = require('/Users/idmstudent/Desktop/final-project/final-project-39dfa-firebase-adminsdk-7lhub-f370ac69a1.json'); // Path to your Firebase service account key
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://final-project-39dfa-default-rtdb.firebaseio.com/' 
});
// test

app.get('/', (req, res) => {
    res.send('Hello, world!'); // Example response for the root path
  });


// Middleware setup working thanks to express-session addon in my project

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/posts', postRoutes);
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));



// Start server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
