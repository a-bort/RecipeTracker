var Mongoose = require('mongoose');

exports.RecipeSchema = new Mongoose.Schema({
    name : { type: String, required : true },
    url: { type: String },
    properties: { type: Object },
    lastModified: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});