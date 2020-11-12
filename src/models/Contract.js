const mongoose = require('mongoose');
const Company = require('./Company');
const Contact = require('./Contact');

const ContractSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""},
    pictures: {type: Array, default: []},
    files: {type: Array, default: []},
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Company
    },
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Contact
    },
    contractNumber: {type: String, trim: true },
    type: {type: String, trim: true},
    Emergency: {type: String, trim: true},
    dateStart: {type: Date},
    dateEnd: {type: Date},
    dateRenewal: { type: Date},
    dateRenewalReminder: {type: Date},
    cost: {type: Number, trim: true},
    paymentType: {type: String, trim: true}
},
    {timestamps: true}
);

module.exports = mongoose.models.Contract || mongoose.model('Contract', ContractSchema)