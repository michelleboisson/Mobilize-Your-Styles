function onRun(context) {

   var sketch = context.api();
   log(sketch.api_version);
   log(sketch.version);
   log(sketch.build);
   log(sketch.full_version);

   //reference the sketch document
	 //var doc = context.document;
   var doc = sketch.selectedDocument;
   var page = doc.selectedPage;
   var selection = context.selection;

   var textStyles = doc.sketchObject.documentData().MSDocumentData;
   //log("textStyles: "+textStyles);

   //make sure something is selected
	if(selection.count() == 0){
		context.document.showMessage("Please select something.");
	}else{
		//loop through the selected layers
		for(var i = 0; i < selection.count(); i++){

			//checks to see if the layer is an artboard
			if(selection[i].class() == "MSArtboardGroup"){
        context.document.showMessage("An artboard!");
        var thisArtboard = selection[i];
        //loop through all elements of the artboard
        var layers = thisArtboard.children();

        for (var i = 0; i < layers.count(); i++){
          // for each the text layers
          //log(layers[i].class());
          if (layers[i].class() == "MSTextLayer"){
            //replace style with mobile style, if it exists
            log(layers[i].class() +" "+ layers[i].style().textStyle().styleWithAttributes);
            dump_obj(layers[i].style());

          }
        }
      }else{
        context.document.showMessage("Please select an artboard to Mobile-ize.");
      }
    }
  }
}


function dump_obj(obj){
  log("#####################################################################################")
  log("## Dumping object " + obj )
  log("## obj class is: " + [obj.class()])
  log("#####################################################################################")

  log("obj.properties:")
  log([obj class].mocha().properties())
  log("obj.propertiesWithAncestors:")
  log([obj class].mocha().propertiesWithAncestors())

  log("obj.classMethods:")
  log([obj class].mocha().classMethods())
  log("obj.classMethodsWithAncestors:")
  log([obj class].mocha().classMethodsWithAncestors())

  log("obj.instanceMethods:")
  log([obj class].mocha().instanceMethods())
  log("obj.instanceMethodsWithAncestors:")
  log([obj class].mocha().instanceMethodsWithAncestors())

  log("obj.protocols:")
  log([obj class].mocha().protocols())
  log("obj.protocolsWithAncestors:")
  log([obj class].mocha().protocolsWithAncestors())

  log("obj.treeAsDictionary():")
  log(obj.treeAsDictionary())
}
