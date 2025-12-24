const express = require('express');
const app = express();
const port = process.env.PORT || 10000; // përdor portin e Render, ose 10000 lokal
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
const path = require('path');

app.use(express.static(path.join(__dirname, '../Frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/index.html'));
});


// Sample data (do të zëvendësohej me databazë)
const sampleData = ["Apple", "Banana", "Cherry"];

app.get('/data', (req, res) => {
    res.json(sampleData);
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});



