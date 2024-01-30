const express = require('express');
const app = express();

const cors = require('cors')

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))


app.get('/', (req, res) => {
    res.send('test works');
})

app.listen(4100, () => {
    console.log('listening on port 4100');
})