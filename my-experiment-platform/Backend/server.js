const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const app = express();

const PORT = process.env.PORT || 10000;

// Lidhja me database (Render jep DATABASE_URL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // për Render
});

// Route për të marrë një shënim nga database
app.get('/note', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM notes LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gabim në server' });
  }
});

// Serve frontend
app.use(express.static(path.join(__dirname, '../Frontend')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



