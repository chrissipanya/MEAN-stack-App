var express = require('express');
var app = express();
var mongojs = require('mongojs')
var db = mongojs();

function onReq(req, res){
	console.log("I got a GET request")
	
	/* person = {} creates new empty object 
	person1 = {
		name: 'Chris',
		email: 'chris@mail.com',
		phone: '(111) 111-1111'
	};
	person2 = {
		name: 'Tim',
		email: 'tim@mail.com',
		phone: '(222) 222-2222'
	};
	person3 = {
		name: 'Bob',
		email: 'Bob@mail.com',
		phone: '(333) 333-3333'
	};
	
	var list = [person1,person2,person3];
	res.json(list);*/
	
	db.list.find(function(){
		console.log(docs);
		res.json(docs);
	})
}


/* To use the http file in frontEnd */
app.use(express.static(__dirname + "/frontEnd"));
app.get('/list', onReq);
app.listen(3333);
console.log('Server is running\n');

