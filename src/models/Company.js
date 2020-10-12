const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""},
    pictures: {type: Array, default: []},
    companyFullName: {type: String, trim: true},
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

module.exports = mongoose.models.Company || mongoose.model('Company', CompanySchema)