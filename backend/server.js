

// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://your-frontend.vercel.app'],
    credentials: true,
  })
);

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Klickks Auth Backend Running with JWT...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
