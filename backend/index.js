import express from "express";
import dotenv from "dotenv";
import db from "./database/database.js";
import router from "./routes/route.js";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(router);

const connectDB = async () => {
    try {
        // await db.sync({force: true});
        await db.authenticate();
        console.log('Database successfully connected');
    } catch (error) {
        console.log('Database failed to connect');
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