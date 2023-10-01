import express from 'express';
import 'dotenv/config';
import mongoDBConnect from './config/database-connection.js'

mongoDBConnect();

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
})