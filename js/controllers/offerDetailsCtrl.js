var offerDetailsCtrl = (function () {
	function render(offerId) {
		Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "Av5f9x57L6qsWpxohLSaXtqUD32Pblzm4dyUnYaJ");

		var Offer = Parse.Object.extend('Offer');
		var query = new Parse.Query(Offer);

		query.equalTo('objectId', offerId);

		query.find({
			success: function (offer) {
				var offerDetailsTemplate = $('#offer-details').html();
				var container = $('#offer-container');

				var outputOfferHtml = Mustache.render(offerDetailsTemplate, offer[0]._serverData);
				console.log(outputOfferHtml);
				container.append(outputOfferHtml);
			}
		})
	}

	return {
		render: render
	}
} ())