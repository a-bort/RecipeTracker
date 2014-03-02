var Mongoose = require('mongoose');

exports.RecipeSchema = new Mongoose.Schema({
    name : { type: String, required : true },
    url: { type: String },
    createdOn: { type: Date }
});