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
	
	this.get('#/offerDetails/:id', function () {
		var id = this.params['id'].substring(1);
		
		this.partial('views/offerDetails.html')
			.then(function () {
				offerDetailsCtrl.render(id);
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
});
app.run('#/');