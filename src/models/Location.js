const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""},
    pictures: {type: Array, default: []},
    status: {type: String, trim: true,  default: "in use"},
    address: {
        streetNumber: { type: String, trim: true},
        street: { type: String, trim: true},
        street2: { type: String, trim: true},
        city: { type: String, trim: true},
        province: { type: String, trim: true},
        country: { type: String, trim: true},
    }
},
    {timestamps: true}
);

module.exports = mongoose.models.Location || mongoose.model('Location', LocationSchema)