var offersCtrl = (function () {
	return {
		render: function (offersLimit, category, sortBy) {
			Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "Av5f9x57L6qsWpxohLSaXtqUD32Pblzm4dyUnYaJ");

			var Offer = Parse.Object.extend('Offer');
			var query = new Parse.Query(Offer);

			if (offersLimit) {
				query.limit(offersLimit)
			}

			if (category && category != 'all') {
				query.equalTo('Category', category);
			}

			switch (sortBy) {
				case 'priceAsc':
					query.ascending("Price");
					break;
				case 'priceDesc':
					query.descending("Price");
					break;
				case 'nameAsc':
					query.ascending("Name");
					break;
				case 'nameDesc':
					query.descending("Name");
					break;
				case 'newest':
					query.descending("createdAt");
					break;
				case 'oldest':
					query.ascending("createdAt");
					break;
				default:
					query.descending("createdAt");
					break;
			}

			$('#sortBy').on('change', function () {
				var sortBy = $('#sortBy').val();

				switch (sortBy) {
					case 'Price ↑':
						offersCtrl.render(0, category, 'priceAsc');
						break;
					case 'Price ↓':
						offersCtrl.render(0, category, 'priceDesc')
						break;
					case 'Name ↑':
						offersCtrl.render(0, category, 'nameAsc')
						break;
					case 'Name ↓':
						offersCtrl.render(0, category, 'nameDesc')
						break;
					case 'Newest':
						offersCtrl.render(0, category, 'newest')
						break;
					case 'Oldest':
						offersCtrl.render(0, category, 'oldest')
						break;
				}
				
				return;
			});


			query.find({
				success: function (offers) {
					var offerThumbnailTemplate = $('#offer-thumbnail').html();
					var container = $('#offers-container');
					container.empty();

					offers.forEach(function (offer) {
						var outputOfferHtml = Mustache.render(offerThumbnailTemplate, offer._serverData);
						container.append(outputOfferHtml);
					});
				}
			});
		}
	}
} ());