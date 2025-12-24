const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (do të zëvendësohej me databazë)
const sampleData = ["Apple", "Banana", "Cherry"];

app.get('/data', (req, res) => {
    res.json(sampleData);
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
