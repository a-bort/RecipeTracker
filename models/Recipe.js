var Mongoose = require('mongoose');

exports.RecipeSchema = new Mongoose.Schema({
    name : { type: String, required : true },
    createdOn: { type: Date }
});