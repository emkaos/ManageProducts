/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"mkoch/opensap/ManageProducts/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});