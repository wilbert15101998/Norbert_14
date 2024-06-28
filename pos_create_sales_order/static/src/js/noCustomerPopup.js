// noCustomerPopup
odoo.define('pos_create_sales_order.noCustomerPopup', function(require) {
	'use strict';

	const ErrorPopup = require('point_of_sale.ErrorPopup');
	const Registries = require('point_of_sale.Registries');

	class noCustomerPopup extends ErrorPopup {
		go_back_screen() {
			this.showScreen('ProductScreen');
			this.trigger('close-popup');
		}

	}
	
	noCustomerPopup.template = 'noCustomerPopup';
	noCustomerPopup.defaultProps = {
		// confirmText: 'Ok',
		// cancelText: 'Cancel',
		title: 'Unknown customer',
		body: 'You cannot Create Sales Order. Select customer first.',
	};

	Registries.Component.add(noCustomerPopup);

	return noCustomerPopup;
});
