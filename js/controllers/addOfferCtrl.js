var addOffer = (function () {
	return {
		add: function () {
			Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "Av5f9x57L6qsWpxohLSaXtqUD32Pblzm4dyUnYaJ");

			var sendOfferButton = $('#submitOffer');
			
			sendOfferButton.on('click', function () {
				var Offer = Parse.Object.extend('Offer'),
					offer = new Offer(),
					category = $('#category').val(),
					manufacturer = $('#manufacturer').val(),
					model = $('#model').val(),
					year = $('#year').val(),
					price = $('#price').val(),
					description = $('#description').val(),
					isNew = $('input[name="condition"]:checked').val();
					
				// convert isNew value to boolean	
				if(isNew === 'true') {
					isNew = true;
				} else {
					isNew = false;
				}

				offer.set('Category', category);
				offer.set('Manufacturer', manufacturer);
				offer.set('Model', model);
				offer.set('Year', +year);
				offer.set('Price', +price);
				offer.set('isNew', isNew);
				offer.set('Description', description);

				offer.save()
					.then(function () {
						var query = new Parse.Query(Offer);
						return query.find();
					})
					.then(function (offers) {
						offers.forEach(function (offer) {
							console.log(offer.get('Manufacturer') + ' ' + offer.get('Model'));
						})
					})
			})
		}
	}
} ());