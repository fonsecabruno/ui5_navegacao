sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("ovly.ui5navegacao.controller.NovaCategoria", {
			onInit: function () {
				this.oRouter = this.getOwnerComponent().getRouter();
			},
			onNavBack: function (){
				this.oRouter.navTo("padrao");

			},
			onCancel: function () {
				this.oRouter.navTo("padrao");

			}
		});
	});
