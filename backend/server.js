// backend/server.js
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS with credentials
app.use(
  cors({
    origin: 'http://localhost:3000', // React app
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Session setup
app.use(
  session({
    secret: 'your-secret-key-here', // Change in production
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // Set to true in HTTPS production
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax',
    },
  })
);

// API Routes
app.use('/api/auth', authRoutes);

// Static file serving (optional, if you build React into backend later)
// app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', (req, res) => {
  res.send('Klickks Auth Backend Running...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});