var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{

	id: 1,
	description: 'Meet mom for lunch',
	completed: false,

},{
	id: 2,
	description:'Go to market',
	completed: false
},{
	id:3,
	description:'Need to play Badminton',
	completed: true
}];

app.get('/',function(req,res){
	res.send('Todo API root');
});


//GET /todos

app.get('/todos',function(req,res){

	res.json(todos);
});



//GET /todos/:id
app.get('/todos/:id',function(req,res){
	var todoId = parseInt(req.params.id,10);
	//res.send('Asking for todo with id of ' + req.params.id);

	var matchedTodo;

	console.log("Length of array stored is : " + todos.length);
	console.log('user searched for id =  ' + todoId );

	for (var i = todos.length - 1; i >= 0; i--) {
		
		console.log(todos[i].id);
		console.log('Type of array elemnt is ' + typeof(todos[i].id));
		console.log('Type of var matchedTodo is ' + typeof(matchedTodo));
		if (todos[i].id === todoId) {
			matchedTodo = todos[i];
			console.log('Matched object ' + matchedTodo);
		}
	}



	if (matchedTodo) {

		res.json(matchedTodo);
		console.log('Items are matched')

	}else{

		res.status(404).send();
		console.log('Error is there');
	}

});





	
app.listen(PORT,function(){

console.log('Express listening on ' + PORT + '!');

});