const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const task = require('./routes/api/task');

const app = express();

// Connect Database
connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));

//middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('Hello world!'));

//routes
app.use('/api/tasks', task);


const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server running on port ${port}`));