var Mongoose = require('mongoose');

exports.PropertyTypeSchema = new Mongoose.Schema({
    id: {},
    name : { type: String, required : true },
    active: { type: Boolean }
}, {collection: 'propertyTypes'});