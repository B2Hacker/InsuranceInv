const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""}
},
    {timestamps: true}
);

module.exports = mongoose.models.SubCategory || mongoose.model('SubCategory', SubCategorySchema)