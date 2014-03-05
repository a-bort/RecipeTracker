var PropertySchema = require('../models/Property.js').PropertySchema;
var PropertyTypeSchema = require('../models/PropertyType.js').PropertyTypeSchema;
/*
 * GET home page.
 */
 
 module.exports = function(app, db){
    var Property = db.model('property', PropertySchema);
    var PropertyType = db.model('propertyTypes',  PropertyTypeSchema);
    
    app.get('/Properties', function(req, res){
        var errorList = [];
        PropertyType.find({active: true}, function(error, types){
            if(error){
                types = [];
                errorList.push(error);
            } else{
                console.log(types);
            }
            Property.find({active: true}, function(error, properties){
                if(error){
                    properties = [];
                    errorList.push(error);
                }
                console.log(properties);
                res.render('properties', {
                    title: 'User Created Properties',
                    error: errorList,
                    types: types,
                    properties: properties,
                    links: {
                        propertyActive: true
                    }
                });
            });
        });
    });
    
    app.post('/Properties/create', function(req, res){
        var prop = new Property(req.body);
        prop.save(function(error, property){
            if(error || !property){
                res.json({error: error});
            } else{
                Property.find({active: true}, function(error, props){
                    if(error){
                        res.json({error: error});
                    } else{
                        res.json({properties: props});
                    }
                });
            }
        });
    });
    
    app.post('/Properties/update', function(req, res){
        var prop = new Property(req.body);
        var raw = prop.toObject();
        delete raw._id;
        prop.update(raw, {}, function(error, property){
            if(error || !property){
                res.json({error: error});
            } else{
                Property.find({active: true}, function(error, props){
                    if(error){
                        res.json({error: error});
                    } else{
                        res.json({properties: props});
                    }
                });
            }
        });
    });
 };