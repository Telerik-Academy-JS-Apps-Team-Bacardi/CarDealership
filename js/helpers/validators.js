var validator = (function () {
	
	function validateManufacturer() {
		var manufacturer = $('#manufacturer');

		manufacturer.on('input', function () {
			if (manufacturer.val() == null || manufacturer.val() == "") {
				manufacturer.parent().parent().addClass('has-error');
			} else {
				manufacturer.parent().parent().removeClass('has-error');
			}
		});
	}
	
	function validateModel() {
		var model = $('#model');

		model.on('input', function () {
			if (model.val() == null || model.val() == "") {
				model.parent().parent().addClass('has-error');
			} else {
				model.parent().parent().removeClass('has-error');
			}
		});
	}
	
	function validateYear() {
		var year = $('#year');

		year.on('input', function () {
			if (year.val() == null || year.val() < 1886 || year.val() > new Date().getFullYear()) {
				year.parent().parent().addClass('has-error');
			} else {
				year.parent().parent().removeClass('has-error');
			}
		});
	}
	
	function validatePrice() {
		var price = $('#price');

		price.on('input', function () {
			if (price.val() == null || price.val() < 0 || price.val() == "") {
				price.parent().parent().parent().addClass('has-error');
			} else {
				price.parent().parent().parent().removeClass('has-error');
			}
		});
	}
	
	function validateForm() {
		validateManufacturer();
		validateModel();
		validateYear();
		validatePrice();
	}
	
	function validateFormForSubmit() {
		return !(
			$('#manufacturer').parent().parent().hasClass('has-error')
			|| $('#model').parent().parent().hasClass('has-error')
			|| $('#price').parent().parent().hasClass('has-error')
			|| $('#year').parent().parent().hasClass('has-error')
			|| $('#image').parent().parent().hasClass('has-error'));
	}
	
	return {
		validateForm: validateForm,
		validateFormForSubmit: validateFormForSubmit
	}
} ())