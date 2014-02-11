
/*
 * GET home page.
 */

exports.index = function(todos){
  return function(req, res){
    res.render('index', { title: 'To Do List', todos: todos });
  };
};

exports.tests = function(req, res){
  res.render('tests/runner', { title: 'End to end Tests'});
};

exports.addTodo = function(todos){
    return function(req, res){
        todos.push(req.body);
        res.json({ todos: todos });
    };
};