//var PropertySchema = require('../models/Property.js').PropertySchema;
//var PropertyTypeSchema = require('../models/PropertyType.js').PropertyTypeSchema;
/*
 * GET home page.
 */
 
 module.exports = function(app, db){
    //var Property = db.model('property', PropertySchema);
    //var PropertyType = db.model('propertyType', 
    
    app.get('/', function(req, res){
        var errorList = [];
        //PropertyTypeSchema.find({active: true}, function(error, types){
        //    if(error){
        //        types = [];
        //        errorList.push(error);
        //    }
        //    Property.find({}, function(error, properties){
        //        if(error){
        //            properties = [];
        //            errorList.push(error);
        //        }
                res.render('index', {
                    title: 'Recipes',
                    error: errorList,
                    recipes: []//,
                    //types: types,
                    //properties: properties
                });
            //});
        //});
    });
    
  // app.post('/create', function(req, res){
  //     var event = new Event(req.body);
  //     event.save(function(error, event){
  //         if(error || !event){
  //             res.json({error: error});
  //         } else{
  //             res.json({ event: event });
  //         }
  //     });
  // });
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