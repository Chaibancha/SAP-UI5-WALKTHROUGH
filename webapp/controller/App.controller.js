sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onInit: function () {
        //ser the data model on the view
        var oData = {
          recipient: {
            name: "UI5",
          }
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        //set i8n model on the view
        var i8nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i8n.i8n",
            supportLocales: [""],
            fallbackLocale: "",
        });
        this.getView().setModel(i8nModel, "i8n")
      },

      onShowHello: function () {
        // read msg from i8n Model
        var oBundle = this.getView().getModel("i8n").getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show a native alert
        MessageToast.show(sMsg);
      },
    });
  }
);
