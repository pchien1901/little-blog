import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { initRoutes } from './routes/index.js';

// config để đọc file .env
dotenv.config();
// đường dẫn tới mongoDB
const mongoURL = process.env.MONGO_URL
app.use(express.json()); // để express đọc được data từ client là json
app.use(express.urlencoded({ extended: true }));

mongoose.connect(mongoURL)
        .then(() => console.log('MongoDB is connected successfully!'))
        .catch((error) => {
            console.error(`Đã có lỗi khi kết nối tới mongoDB: ${error}`)
        });
const app = express();
const port = 7000;

// setting router
initRoutes(app);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});