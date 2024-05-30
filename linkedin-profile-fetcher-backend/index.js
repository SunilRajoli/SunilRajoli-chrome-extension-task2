const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Database setup
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Profile = sequelize.define('Profile', {
  name: { type: DataTypes.STRING },
  url: { type: DataTypes.STRING },
  about: { type: DataTypes.STRING },
  bio: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  followerCount: { type: DataTypes.STRING },
  connectionCount: { type: DataTypes.STRING }
});

sequelize.sync();

// API endpoint to post data
app.post('/api/profiles', async (req, res) => {
  try {
    console.log('Received data:', req.body); // Log the received data
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    console.error('Error:', error.message); // Log any error
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
