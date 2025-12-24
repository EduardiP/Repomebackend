const express = require('express');
const app = express();
const port = process.env.PORT || 10000; // përdor portin e Render, ose 10000 lokal
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});


// Sample data (do të zëvendësohej me databazë)
const sampleData = ["Apple", "Banana", "Cherry"];

app.get('/data', (req, res) => {
    res.json(sampleData);
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

