sap.ui.define([
	"ovly/ui5navegacao/controller/BaseController",
	"ovly/ui5navegacao/model/formatter"
],
	function (BaseController, Formatter ) {
		"use strict";

		return BaseController.extend("ovly.ui5navegacao.controller.Produtos", {

		   formatter : Formatter,

			onInit: function() {
				let oRoute = this.getRouter().getRoute("detalhe");
				oRoute.attachPatternMatched(this.onPatternMatched, this);
			},

			onPatternMatched: function(oEvent) {
				let oParameters = oEvent.getParameters();
				let oArguments = oParameters.arguments;
			
				let sPath = this.getModel().createKey("Categories", {
					ID: oArguments.id
				});
				// console.log(oArguments.id);
				this.getView().bindElement({
					path: "/" + sPath

				});
			},

			onNavBack: function() {
			}
	
		});
	});
