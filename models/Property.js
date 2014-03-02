var Mongoose = require('mongoose');

exports.PropertySchema = new Mongoose.Schema({
    name : { type: String, required : true },
    active: { type: Boolean },
    typeId: { type: String },
    typeConfig: { type: Object },
    lastModified: { type: Date, default: Date.now }
});