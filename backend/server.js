const express = require('express');
<<<<<<< HEAD
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();


app.use(express.json());


app.use(cors());

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

connectDB();

app.use('/api/auth', require('./routes/auth')); 
app.use('/api/courses', require('./routes/Courses')); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
=======
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
>>>>>>> 75856773b61f9b2999044ba62eb6698fa0ba1183
});
