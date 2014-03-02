var Mongoose = require('mongoose');

exports.PropertyTypeSchema = new Mongoose.Schema({
    name : { type: String, required : true },
    active: { type: Boolean },
    config: { type: Object }
}, {collection: 'propertyTypes'});