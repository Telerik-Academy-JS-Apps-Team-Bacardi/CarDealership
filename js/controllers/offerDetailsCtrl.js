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
				container.append(outputOfferHtml);
				
				addDeleteButton(offer);
			}
		})
	}

	function addDeleteButton(offer) {
		if (offer[0]._serverData.createdBy.id === Parse.User.current().id) {
			var deleteBtn = $('<button/>').addClass('btn btn-danger pull-right btn-lg').html('Delete offer');

			deleteBtn.on('click', function () {
				offer[0].destroy({
					success: function (offer) {
						window.history.back();
					}
				});
			})

			$('.panel-body').append($('<hr/>')).append(deleteBtn);
		}
	}

	return {
		render: render
	}
} ())