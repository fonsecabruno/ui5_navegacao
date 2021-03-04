sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("ovly.ui5navegacao.controller.Categoria", {
			onAdd: function () {
             let oRouter =  this.getOwnerComponent().getRouter();
             oRouter.navTo("novaCategoria");

			},
            onItemPress: function (oEvent) {
                let oListItem = oEvent.getParameters().listItem;
                let oContext = oListItem.getBindingContext();
                let oCategory = oContext.getObject();
                
                let oRouter = this.getOwnerComponent().getRouter();

                var oParameterosDaRota = {
            
                    id: oCategory.ID // $metadata
                               
                }
            
                oRouter.navTo("detalhe", oParameterosDaRota);
            }

		});
	});
