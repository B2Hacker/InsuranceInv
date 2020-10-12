const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""},
    pictures: {type: Array, default: []},
    files: {type: Array, default: []},
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact"
    },
    contractNumber: {type: String, required: true, trim: true },
    type: {type: String, required: true, trim: true},
    Emergency: {type: String, required: true, trim: true},
    dateStart: {type: Date},
    dateEnd: {type: Date},
    dateRenewal: { ype: Date},
    dateRenewalReminder: {type: Date},
    cost: {type: Number, trim: true},
    paymentType: {type: String, trim: true}
},
    {timestamps: true}
);

module.exports = mongoose.models.Contract || mongoose.model('Contract', ContractSchema)