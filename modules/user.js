const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    progress: {
        completedLessons: [String],
        quizScores: [Number]
    }
});

module.exports = mongoose.model("User", UserSchema);