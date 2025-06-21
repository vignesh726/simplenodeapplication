// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Example POST endpoint
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
