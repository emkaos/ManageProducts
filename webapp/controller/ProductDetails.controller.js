sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"mkoch/opensap/ManageProducts/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("mkoch.opensap.ManageProducts.controller.ProductDetails", {
		formatter: formatter,

		onInit: function() {
			this.byId("categoryLabel").setVisible(false);
			this.byId("category").setVisible(false);
		}
	})
})
