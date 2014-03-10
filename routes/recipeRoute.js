var PropertySchema = require('../models/Property.js').PropertySchema;
var RecipeSchema = require('../models/Recipe.js').RecipeSchema;
var PropertyTypeSchema = require('../models/PropertyType.js').PropertyTypeSchema;
/*
 * GET home page.
 */
 
 module.exports = function(app, db){
    var Property = db.model('property', PropertySchema);
    var Recipe = db.model('recipe', RecipeSchema);
    var PropertyType = db.model('propertyTypes',  PropertyTypeSchema);
    
    app.get('/', function(req, res){
        var errorList = [];
        PropertyType.find({active: true}, function(error, types){
            if(error){
                types = [];
                errorList.push(error);
            }
            Recipe.find({active: true}, function(error, recipes){
                if(error){
                    recipes = [];
                    errorList.push(error);
                }
                Property.find({active: true}, function(error, properties){
                    if(error){
                        properties = [];
                        errorList.push(error);
                    }
                    res.render('index', {
                        title: 'Recipes',
                        error: errorList,
                        links: {
                            homeActive: true
                        },
                        recipes: recipes,
                        properties: properties,
                        types: types
                    });
                });
            });
        });
    });
    
   app.post('/Recipe/create', function(req, res){
       var recipe = new Recipe(req.body);
       recipe.save(function(error, recipe){
           if(error || !recipe){
               res.json({error: error});
           } else{
               Recipe.find({active: true}, function(error, recipes){
                    if(error){
                        res.json({error: error});
                    } else{
                        res.json({recipes: recipes});
                    }
                });
           }
       });
   });
   
   app.post('/Recipe/update', function(req, res){
        var recipe = new Recipe(req.body);
        var raw = recipe.toObject();
        delete raw._id;
        recipe.update(raw, {}, function(error, recipe){
            if(error || !recipe){
                res.json({error: error});
            } else{
                Recipe.find({active: true}, function(error, recipes){
                    if(error){
                        res.json({error: error});
                    } else{
                        res.json({recipes: recipes});
                    }
                });
            }
        });
   });
 };