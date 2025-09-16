const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: "API is running!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});