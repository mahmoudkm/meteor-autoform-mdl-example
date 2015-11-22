this.AFormMDLTestGlobalObj = {};

this.AFormMDLTestGlobalObj.itemsSch = new SimpleSchema({    
  
  ItemCode: {
    type: String,
    label: "Item Code"
  },
  ItemName: {
    type: String,
    label: "Item Name"
  }

});


// UI.registerHelper('AdminSchemas', function() {
//   return AFormMDLTestGlobalObj;
// });
