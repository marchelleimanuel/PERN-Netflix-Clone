import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
    res.send('halo bang');
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});