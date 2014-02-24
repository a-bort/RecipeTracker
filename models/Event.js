var Mongoose = require('mongoose');

exports.EventSchema = new Mongoose.Schema({
    name : { type: String, required : true },
    date: { type: Date, required: true },
    specificTime: { type: Boolean, default: false },
    slots: { type: Number, required: false },
    unlimited: { type: Boolean, required: false },
    hostId: { type: String },
    createdBy: { type: String },
    createdOn: { type: Date }
});