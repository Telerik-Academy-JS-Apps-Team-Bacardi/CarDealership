'use strict';

var app = Sammy('#viewContainer', function () {

	this.get('#/', function () {
		this.partial('views/enterApp.html');
	});

	this.get('#/home', function () {
		this.partial('views/home.html')
			.then(function () {
				offersCtrl.render(6);
				categoryMenuCtrl.render();
			});

	});

	this.get('#/addOffer', function () {
		this.partial('views/newOffer.html')
			.then(function () {
				newOfferCtrl();
			})
	})

	this.get('#/userLogin', function () {
		this.partial('views/userLogin.html')
			.then(function () {
				addUser.add();
			});
	});

	this.get('#/offers/:category', function () {
		var category = this.params['category'].substring(1);

		this.partial('views/offers.html')
			.then(function () {
				offersCtrl.render(0, category);
				categoryMenuCtrl.render();
			});
	});

	this.get('#/offer/:id', function () {
		alert('Watching offer details for offer with id: ' + this.params['id']);
	});
});
app.run('#/');