angular-blockly
===============
This project is a version of the blockly visual programming library for AngularJS. It's not simply a directive that encapsulates the blockly library, but a modified version of the library to provide better integration with Angular, and also provide themeing (eg Bootstrap).

It (will) provides the following features that differ from the blockly library -:
* CSS is removed from the library and moved to a LESS file to allow theming.
* A callback will be added when changing variables to allow a custom dialog to be provided rather than using the browser entry.
* The IO supports JSON, not XML for saving designs.

** NOTE ** Now that blockly has moved to github, I might try to add some of these features to the blockly core, and then try to use that in this repo to take benefit of blockly updates.

This library contains three parts -:
A ngBlockly provider to allow configuration. From your startup code, you can call
```
        ngBlocklyProvider.setOptions({
            path: "assets/",
            trashcan: true,
            toolbox: [
            ]
        });
```
to set the blockly options

A Blockly service. This is the main way to interact with the blockly library. The service is a singleton, so this does assume that there's only one design on the screen at once.
The following methods are available

Method  | Description
------------- | -------------
```setWorkspace```  | Sets the current workspace.
```clearWorkspace```   | Clears the current workspace.
```getWorkspace```   | Gets the current workspace.
```onChange```   | Sets a change callback that is called when the workspace changes.

The ```ng-blockly``` directive, which must be defined as an element.


