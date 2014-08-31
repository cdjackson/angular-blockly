angular-blockly
===============
This project is a version of the blockly visual programming library for AngularJS. It's not simply a directive that encapsulates the blockly library, but a modified version of the library to provide better integration with Angular, and also provide theming (eg Bootstrap).

It (will) provides the following features that differ from the blockly library -:
* CSS is removed from the library and moved to a LESS file to allow theming.
* A callback will be added when changng variables to allow a custom dialog to be provided rather than using the browser entry.
* The IO supports JSON, not XML for saving designs.
