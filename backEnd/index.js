const express = require('express');
const app = express();
const connectDB = require('./connectDB');
const dotenv = require('dotenv');

app.use(express.json())

dotenv.config();

const cors = require('cors');
const register = require('./controllers/user.controller.js');

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))


app.get('/', (req, res) => {
    res.send('test works');
})

app.post('/register', register);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(4100, () => {
        console.log('listening on port 4100');
        })
    } catch (error) {
        console.log(error)
    }
}

start();

