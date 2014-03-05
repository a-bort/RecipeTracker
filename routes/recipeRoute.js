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
    
   app.post('/create', function(req, res){
       var recipe = new Recipe(req.body);
       recipe.save(function(error, recipe){
           if(error || !recipe){
               res.json({error: error});
           } else{
               res.json({ recipe: recipe });
           }
       });
   });
  // 
  // app.post('/update', function(req, res){
  //     var id = req.body.id;
  //     var done = req.body.done;
  //     Event.find({ _id: id }, function(err, events){
  //         if(err){
  //             res.json({error: err});
  //         }
  //         else if(events.length){
  //             var event = events[0];
  //             event.done = done;
  //             event.save(function(error, result){
  //                 if(error || !result){
  //                     res.json({error: error});
  //                 } else{
  //                     res.json({success: true});
  //                 }
  //             });
  //         }
  //     })
  // });
  // 
  // app.post('/delete', function(req, res){
  //     var id = req.body.id;
  //     Event.remove({_id: id}, function(err){
  //         if(err){
  //             res.json({error: err});
  //         } else {
  //             Event.find({}, function(error, events){
  //                 if(error){
  //                     res.json({error : error});
  //                 }
  //                 else{
  //                     res.json({events : events});
  //                 }
  //             });
  //         }
  //     });
  // });
 };