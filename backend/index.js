import express from "express";
import dotenv from "dotenv";
import db from "./database/database.js";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

const connectDB = () => {
    try {
        db.authenticate();
        console.log('Database successfully connected');
    } catch (error) {
        console.log(error);
    }
}

connectDB();

app.get('/', (req, res) => {
    res.send('ini tes aja ya bro');
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});