const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 }
}, {
    timestamps: true, //Tự động thêm createdAt updatedAt
})

module.exports = mongoose.model('Course', Course);