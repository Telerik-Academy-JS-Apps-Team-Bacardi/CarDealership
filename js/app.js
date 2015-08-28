'use strict';

var app = Sammy('#viewContainer', function () {

	this.get('#/', function () {
		this.partial('views/enterApp.html');
	});

	this.get('#/home', function () {
		this.partial('views/home.html')
			.then(function() {
				homeCtrl.render();
			});
		
	});

	this.get('#/newOffer', function () {
		this.partial('views/newOffer.html')
			.then(function() {
				newOfferCtrl.addOffer();
			});
	});

	this.get('#/offer/:id', function () {
		alert('Watching offer details for offer with id: ' + this.params['id']);
	});
});
app.run('#/');