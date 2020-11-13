const mongoose = require('mongoose');
const Company = require('./Company');

const ContactSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""},
    pictures: {type: Array, default: []},
    firstName: {type: String, trim: true},
    lastName: {type: String, trim: true},
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Company
    },
    contactInfo: {
        tel: {type: String, trim: true},
        tel2: {type: String, trim: true},
        email: {type: String, trim: true},
        email2: {type: String, trim: true},
        url: {type: String, trim: true}
    },
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

module.exports = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)