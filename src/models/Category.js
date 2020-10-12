const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""},
    pictures: {type: Array, default: []},
    subCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory"
    }],
},
    {timestamps: true}
);

module.exports = mongoose.models.Category || mongoose.model('Category', CategorySchema)