const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example: Save to memory (replace with DB or Google Sheets API as needed)
let registrations = [];

// POST endpoint for form submission
app.post('/api/register', async (req, res) => {
  try {
    const targetUrl = 'https://script.google.com/macros/s/AKfycbw0DRkwazo-Mi7CazkqQzvM5IZC4Xl_KuYLhGLccH8adSrFPJfCK4LxzeJ-NTQlstW0/exec';
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const result = await response.json();
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});