const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    mobile_no: { type: String, required: true },
    courses: { type: [String], required: true }, // Array of courses
}, { timestamps: true });

module.exports = mongoose.model("Company", companySchema);
