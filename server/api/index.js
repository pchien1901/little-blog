import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// config để đọc file .env
dotenv.config();
// đường dẫn tới mongoDB
const mongoURL = process.env.MONGO_URL
mongoose.connect(mongoURL)
        .then(() => console.log('MongoDB is connected successfully!'))
        .catch((error) => {
            console.error(`Đã có lỗi khi kết nối tới mongoDB: ${error}`)
        });
const app = express();
const port = 7000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});