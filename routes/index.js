
/*
 * GET home page.
 */

exports.index = function(Todo){
  return function(req, res){
    Todo.find({}, function(error, todos){
        res.render('index', {
            title: 'Todo List',
            todos: todos
        });
    });
  };
};

exports.tests = function(req, res){
  res.render('tests/runner', { title: 'End to end Tests'});
};

exports.addTodo = function(Todo){
    return function(req, res){
        var todo = new Todo(req.body);
        todo.save(function(error, todo){
            if(error || !todo){
                res.json({error: error});
            } else{
                res.json({ todo: todo });
            }
        });
    };
};

exports.setTodoStatus = function(Todo){
    return function(req, res){
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
    }
}

exports.deleteTodo = function(Todo){
    return function(req, res){
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
    }
}