import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // Tên người dùng
    username: {
        type: String,
        required: true,
        unique: true,
    },
    // Email
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // Password
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // createdAt + updatedAt
});

const User = mongoose.model('User', userSchema);

export default User;