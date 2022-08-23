const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const app = express();
const connectDatabase = require('./database');
const authRoutes = require('./routes/auth');
const cors = require('cors');
connectDatabase();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);
app.listen(process.env.PORT, () => {
  console.log(`app started ${process.env.PORT}`);
});
