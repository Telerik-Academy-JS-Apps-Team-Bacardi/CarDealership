'use strict';

var app = Sammy('#viewContainer', function (){
	
	this.get('#/', function() {
		this.partial('views/enterApp.html');
	});
	
	this.get('#/home', function() {
		this.partial('views/home.html');
	});
	
	this.get('#/offer/:id', function() {
		alert('Watching offer details for offer with id: ' + this.params['id']);
	});
});
app.run('#/');