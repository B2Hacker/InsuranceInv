const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, trim: true},
    description: {type: String, trim: true, default: ""},
    pictures: {type: Array, default: []},
    location: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location"
    }],
},
    {timestamps: true}
);

module.exports = mongoose.models.Room || mongoose.model('Room', RoomSchema)