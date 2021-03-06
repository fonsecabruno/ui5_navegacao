sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"

],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageBox, MessageToast) {
		"use strict";
		return Controller.extend("ovly.ui5navegacao.controller.NovaCategoria", {
			// oRouter: null,
			onInit: function () {
				this.oRouter = this.getOwnerComponent().getRouter();
				this.oRouter
					.getRoute("novaCategoria")
					.attachPatternMatched(this.onPatternMached, this);
			},
			onPatternMached: function (oEvent) {
				// @type sap.ui.model.odata.v2.ODataModel
				var oModel = this.getView().getModel();
				var oPromiseMetadataLoaded = this.getView().getModel().metadataLoaded();
				oPromiseMetadataLoaded.then(function () {
					this._oContext = oModel.createEntry("/Categories", {});
					this.getView().setBindingContext(this._oContext);
				}.bind(this));
			},
			onNavBack: function () {
				this.oRouter.navTo("padrao");
			},
			onSave: function () {


				function onSuccess(oNovaCategoria) {

					MessageToast.show("Coleção cadastrada com sucesso", {

						closeOnBrowserNavigation: false

					});

					this.oRouter.navTo("detalhe", {

						id: this._oContext.getProperty("ID")

					});

				}



				function onError(oError) {

					MessageBox.error("Erro na criação da categoria");

				}



				this.getView().getModel().submitChanges({

					success: onSuccess.bind(this),

					error: onError.bind(this)

				});

			}
		});
	});