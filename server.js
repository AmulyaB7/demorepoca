const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the Express server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Input validation
    if (!email) {
      return res.status(400).json({ error: 'Email cannot be empty' });
    }
  
    if (!password) {
      return res.status(400).json({ error: 'Password cannot be empty' });
    }
  
    res.status(200).json({
      message: 'Login successful',
      data: { email }
    });
  });
  