var newOfferCtrl = (function () {
	return {
		addOffer: function () {
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
					isNew = $('input[name="condition"]:checked').val(),
					image = $('#image').val();
					
				// convert isNew value to boolean	
				if (isNew === 'true') {
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
				offer.set('imageURL', image);

				offer.save();
			})
		},
		renderImage: function () {
			var image = $('#offer-image'),
				url = $('#image');
				
			image.hide();
			
			url.on('input', function () {
				if(url.val().match(/\.(jpeg|jpg|gif|png)$/) != null) {
					url.parent().parent().removeClass('has-error');
					image.attr('src', url.val());
					image.show();					
				} else {
					url.parent().parent().addClass('has-error');
					image.hide();
				}
			})
		}
	}
} ());