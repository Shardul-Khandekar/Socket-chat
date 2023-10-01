import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Homepage")
})

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
})