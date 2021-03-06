sap.ui.define([
	"ovly/ui5navegacao/controller/BaseController",
	"ovly/ui5navegacao/model/formatter"
],
	function (BaseController, formatter ) {
		"use strict";

		return BaseController.extend("ovly.ui5navegacao.controller.Produtos", {
			onInit: function() {
				let oRoute = this.getRouter().getRoute("detalhe");
				oRoute.attachPatternMatched(this.onPBO);
			},

			onPBO: function() {
				console.log("caiu");
			},

			onNavBack: function() {
			}
	
		});
	});
