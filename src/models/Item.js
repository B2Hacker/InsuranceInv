const mongoose = require('mongoose');
const Location = require('./Location');
const Room = require('./Room');
const Category = require('./Category');
const Condition = require('./Condition');
const Company = require('./Company');
const Contract = require('./Contract');

const ItemSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""},
    pictures: {type: Array, default: []},
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Location
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Room
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    },
    condition: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Condition
    },
    estimatedValue: {type: Number, trim: true},
    model: {type: String, trim: true},
    brand: {type: String, trim: true},
    serialNumber: {type: String, trim: true},
    notes: {type: String, trim: true, default: ""},
    purchaseInfo: {
        purchaseDate: {type: Date},
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Company,
        },
        cost: {type: Number, trim: true},
        waranty: {type: Boolean, default: true},
        contract: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Contract,
        },
    purchaseNotes: {type: String, trim: true, default: ""}
    }
},
    {timestamps: true}
);

module.exports = mongoose.models.Item || mongoose.model('Item', ItemSchema)