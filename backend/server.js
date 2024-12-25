const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/courses', courseRoutes);


// Routes
app.use('/api/auth', authRoutes);

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
