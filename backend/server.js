const express = require('express');
const cors = require('cors');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://klickks-app-dasss.vercel.app'], 
    credentials: true,
  })
);


app.use(express.json());

// Session middleware
app.use(
  session({
    store: new SQLiteStore({ db: 'sessions.sqlite' }),
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  })
);

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Klickks Auth Backend Running with Sessions...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
