const express = require('express');
const path = require('path'); // shto path për frontend
const app = express();

const PORT = process.env.PORT || 10000; // përdor portin e Render, ose 10000 lokal

// Sample data (mund të zëvendësohet me databazë)
const sampleData = ["Apple", "Banana", "Cherry"];
app.get('/data', (req, res) => {
    res.json(sampleData);
});

// Serve frontend files
app.use(express.static(path.join(__dirname, '../Frontend')));

// Nëse duam që çdo request të kthejë index.html (për SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});





