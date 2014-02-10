
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'To Do List', todos: [
    { 
        description: "Buy Groceries",
        due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        done: false
    },
    { 
        description: "Do Laundry",
        due : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        done: false
    },
    { 
        description: "Rescue puppies from burning building",
        due : new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),
        done: true
    }    
  ] });
};