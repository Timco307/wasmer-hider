const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const targetUrl = 'https://ixl-for-wasmer.wasmer.app'; // Private URL

// Serve static files
app.use(express.static(path.join(__dirname, 'static')));

// Proxy route to fetch private content
app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get(targetUrl);
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching content:', error.message);
    res.status(500).send('Failed to load content.');
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
