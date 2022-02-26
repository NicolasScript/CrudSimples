const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("TextModel", textSchema);