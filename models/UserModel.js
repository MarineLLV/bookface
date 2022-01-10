const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true, selct: false },

    username: { type: String, required: true, unique: true, trim: true },

    profilPicUrl: { type: String },

    newMessagePopup: { type: Boolean, default: true },

    unreadNotification: { type: Boolean, default: false },

    role: { type: String, default: "user", enum: ['user', 'root'] },

    resetToken: { type: String },

    expireToken: { type: Date }

}, { timestamps: true }
);

module.exports = mongoose.model();