const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const cors=require('cors');

dotenv.config();


connectDB();


const app = express();
app.use(cors());


app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

const PORT = process.env.PORT || 6005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
