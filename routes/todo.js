var TodoSchema = require('../models/Todo.js').TodoSchema;
/*
 * GET home page.
 */
 
 module.exports = function(app, db){
    var Todo = db.model('todos', TodoSchema);
    
    app.get('/', function(req, res){
        Todo.find({}, function(error, todos){
            res.render('index', {
                title: 'Todo List',
                todos: todos
            });
        });
    });
    
    
    app.post('/create', function(req, res){
        var todo = new Todo(req.body);
        todo.save(function(error, todo){
            if(error || !todo){
                res.json({error: error});
            } else{
                res.json({ todo: todo });
            }
        });
    });
    
    app.post('/update', function(req, res){
        var id = req.body.id;
        var done = req.body.done;
        Todo.find({ _id: id }, function(err, todos){
            if(err){
                res.json({error: err});
            }
            else if(todos.length){
                var todo = todos[0];
                todo.done = done;
                todo.save(function(error, result){
                    if(error || !result){
                        res.json({error: error});
                    } else{
                        res.json({success: true});
                    }
                });
            }
        })
    });
    
    app.post('/delete', function(req, res){
        var id = req.body.id;
        Todo.remove({_id: id}, function(err){
            if(err){
                res.json({error: err});
            } else {
                Todo.find({}, function(error, todos){
                    if(error){
                        res.json({error : error});
                    }
                    else{
                        res.json({todos : todos});
                    }
                });
            }
        });
    });
 };