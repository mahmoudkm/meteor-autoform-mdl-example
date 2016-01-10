this.AFormMDLTestGlobalObj = {};

this.AFormMDLTestGlobalObj.itemsSch = new SimpleSchema({    
  
  ItemCode: {
    type: String,
    label: "Item Code"
  },
  ItemName: {
    type: String,
    label: "Item Name",
    optional: true,
    // placeholder: "Testing..."

  },
  ItemDeliverToHome: {
    type: String,
    label: "Deliver to home?",
    optional: false,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Yes", value: 'Yes'},
          {label: "No", value: 'No'}
        ];
      }
    }
  },
  memoField: {
    type: String,
    label: "Memo Field",
    optional: false,
    max: 1000,
    autoform: {
      rows: 8
    }
  }

});


// UI.registerHelper('AdminSchemas', function() {
//   return AFormMDLTestGlobalObj;
// });
