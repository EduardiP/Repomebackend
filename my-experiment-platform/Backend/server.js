const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const app = express();

const PORT = process.env.PORT || 10000;

// Lidhja me database PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Serve frontend
app.use(express.static(path.join(__dirname, '../Frontend')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/index.html'));
});

// Route i thjesht nga backend
app.get('/best-fruit', (req, res) => {
  res.json({ bestFruit: 'Fruti më i mirë: Bananja' });
});

// Route për frut random nga database
app.get('/random-fruit', async (req, res) => {
  try {
    const result = await pool.query('SELECT title FROM notes ORDER BY RANDOM() LIMIT 1');
    if (result.rows.length > 0) {
      res.json({ fruit: result.rows[0].title });
    } else {
      res.json({ fruit: 'Nuk ka të dhëna' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ fruit: 'Gabim në server' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


