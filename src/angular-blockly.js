/**
 * blockly directive for AngularJS
 *
 * Author: Chris Jackson
 *
 * License: MIT
 */
angular.module("angular-blockly", [
    'ui.bootstrap.modal'
])
    .provider("ngBlockly", function() {
        this.options = {};

        this.$get = function () {
            var localOptions = this.options;
            return {
                getOptions: function () {
                    return localOptions;
                }
            };
        };

        this.setOptions = function (options) {
            this.options = options;
        };
    })

    .directive('ngBlockly', function ($window, $timeout, ngBlockly, $modal) {
        return {
            restrict: 'E',
            scope: { // Isolate scope
                ngModel: '=',
                onChange: '='
            },
            template: '<div style="height:100%" class="ng-blockly"></div>',
            link: function ($scope, element, attrs) {
                var options = ngBlockly.getOptions();
                Blockly.inject(element.children()[0],
                    {
                        path: 'assets/',
                        trashcan: true,
                        renameVariableCallback: function(a,b,callback) {
                        },
                        toolbox: [
                            {
                                name: "Logic",
                                blocks: [
                                    {type: "logic_compare"},
                                    {type: "logic_operation"},
                                    {type: "logic_negate"},
                                    {type: "controls_if"},
                                    {type: "openhab_iftimer"},
                                    {type: "logic_boolean"}
                                ]
                            },
                            {
                                name: "Math",
                                blocks: [
                                    {type: "math_number"},
                                    {type: "math_arithmetic"},
                                    {type: "math_round"},
                                    {type: "math_constrain"},
                                    {type: "math_constant"},
                                    {type: "math_trig"},
                                    {type: "math_number_property"},
                                    {type: "math_change"}
                                ]
                            },
                            {
                                name: "Items",
                                blocks: [
                                    {type: "openhab_itemset"},
                                    {type: "openhab_itemget"},
                                    {type: "openhab_itemcmd"},
                                    {type: "openhab_persistence_get"},
                                    {type: "variables_set"},
                                    {type: "variables_get"},
                                    {type: "openhab_constantget"},
                                    {type: "openhab_constantset"},
                                    {type: "openhab_state_onoff"},
                                    {type: "openhab_state_openclosed"},
                                    {type: "text"}
                                ]
                            }
                        ]
                    });

                var holdoff = true;
                if($scope.onChange) {
                    $(Blockly.mainWorkspace.getCanvas()).bind("blocklyWorkspaceChange", function() {
                        if(holdoff === false) {
                            $scope.onChange();
                        }
                    });
                }

                var x = {"name":"Bathroom Fan Controller","id":"4","block":{"type":"openhab_rule","deletable":"false","children":[{"type":"statement","name":"CONSTANT","block":{"type":"openhab_constantset","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"math_number","fields":{"name":"NUM","value":"70"}}},"fields":{"name":"CONSTANT","value":"HumidityHIGH"},"next":{"type":"openhab_constantset","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"math_number","fields":{"name":"NUM","value":"68"}}},"fields":{"name":"CONSTANT","value":"HumidityLOW"}}}},{"type":"statement","name":"STACK","block":{"type":"controls_if","inline":"false","mutation":[{"name":"elseif","value":"1"},{"name":"else","value":"1"}],"children":[{"type":"value","name":"IF0","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bath_Fan_Override"}}},{"type":"value","name":"B","block":{"type":"math_number","fields":{"name":"NUM","value":"0"}}}],"fields":{"name":"OP","value":"EQ"}}},{"type":"statement","name":"DO0","block":{"type":"openhab_itemcmd","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"openhab_state_onoff","fields":{"name":"STATE","value":"OFF"}}},"fields":{"name":"ITEM","value":"Bath_Fan_State"}}},{"type":"value","name":"IF1","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bath_Fan_Override"}}},{"type":"value","name":"B","block":{"type":"math_number","fields":{"name":"NUM","value":"1"}}}],"fields":{"name":"OP","value":"EQ"}}},{"type":"statement","name":"DO1","block":{"type":"openhab_itemcmd","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"openhab_state_onoff","fields":{"name":"STATE","value":"ON"}}},"fields":{"name":"ITEM","value":"Bath_Fan_State"}}},{"type":"statement","name":"ELSE","block":{"type":"controls_if","inline":"false","mutation":{"name":"elseif","value":"1"},"children":[{"type":"value","name":"IF0","block":{"type":"logic_operation","inline":"false","mutation":{"name":"operators","value":"1"},"children":[{"type":"value","name":"IN0","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bath_TempHum_Humidity"}}},{"type":"value","name":"B","block":{"type":"openhab_constantget","fields":{"name":"CONSTANT","value":"HumidityHIGH"}}}],"fields":{"name":"OP","value":"GT"}}},{"type":"value","name":"IN1","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bed1_TempHum_Humidity"}}},{"type":"value","name":"B","block":{"type":"openhab_constantget","fields":{"name":"CONSTANT","value":"HumidityHIGH"}}}],"fields":{"name":"OP","value":"GT"}}},{"type":"value","name":"IN2","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bed1_TempHum_AbsHumidity"}}},{"type":"value","name":"B","block":{"type":"math_arithmetic","inline":"false","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bed1_TempHum_AbsHumidity"}}},{"type":"value","name":"B","block":{"type":"math_number","fields":{"name":"NUM","value":"1"}}}],"fields":{"name":"OP","value":"MULTIPLY"}}}],"fields":{"name":"OP","value":"GT"}}}],"fields":[{"name":"OP1","value":"OR"},{"name":"OP2","value":"OR"}]}},{"type":"statement","name":"DO0","block":{"type":"variables_set","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"logic_boolean","fields":{"name":"BOOL","value":"TRUE"}}},"fields":{"name":"VAR","value":"Override"},"next":{"type":"openhab_itemcmd","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"openhab_state_onoff","fields":{"name":"STATE","value":"ON"}}},"fields":{"name":"ITEM","value":"Bath_Fan_State"}}}},{"type":"value","name":"IF1","block":{"type":"logic_operation","inline":"false","mutation":{"name":"operators","value":"2"},"children":[{"type":"value","name":"IN0","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"variables_get","fields":{"name":"VAR","value":"Override"}}},{"type":"value","name":"B","block":{"type":"logic_boolean","fields":{"name":"BOOL","value":"TRUE"}}}],"fields":{"name":"OP","value":"EQ"}}},{"type":"value","name":"IN1","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bath_TempHum_Humidity"}}},{"type":"value","name":"B","block":{"type":"openhab_constantget","fields":{"name":"CONSTANT","value":"HumidityLOW"}}}],"fields":{"name":"OP","value":"LT"}}}],"fields":[{"name":"OP1","value":"AND"},{"name":"OP3","value":"AND"},{"name":"OP3","value":"AND"}]}},{"type":"statement","name":"DO1","block":{"type":"openhab_itemcmd","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"openhab_state_onoff","fields":{"name":"STATE","value":"OFF"}}},"fields":{"name":"ITEM","value":"Bath_Fan_State"}}}],"next":{"type":"openhab_iftimer","inline":"false","children":[{"type":"value","name":"IF0","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bath_Fan_State"}}},{"type":"value","name":"B","block":{"type":"openhab_state_onoff","fields":{"name":"STATE","value":"OFF"}}}],"fields":{"name":"OP","value":"EQ"}}},{"type":"statement","name":"DO0","block":{"type":"variables_set","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"logic_boolean","fields":{"name":"BOOL","value":"TRUE"}}},"fields":{"name":"VAR","value":"Override"},"next":{"type":"openhab_itemcmd","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"openhab_state_onoff","fields":{"name":"STATE","value":"ON"}}},"fields":{"name":"ITEM","value":"Bath_Fan_State"}}}}],"fields":[{"name":"NUM","value":"3"},{"name":"PERIOD","value":"HOURS"}],"next":{"type":"openhab_iftimer","inline":"false","children":[{"type":"value","name":"IF0","block":{"type":"logic_operation","inline":"true","children":[{"type":"value","name":"IN0","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"openhab_itemget","fields":{"name":"ITEM","value":"Bath_Fan_State"}}},{"type":"value","name":"B","block":{"type":"openhab_state_onoff","fields":{"name":"STATE","value":"ON"}}}],"fields":{"name":"OP","value":"EQ"}}},{"type":"value","name":"IN1","block":{"type":"logic_compare","inline":"true","children":[{"type":"value","name":"A","block":{"type":"variables_get","fields":{"name":"VAR","value":"Override"}}},{"type":"value","name":"B","block":{"type":"logic_boolean","fields":{"name":"BOOL","value":"TRUE"}}}],"fields":{"name":"OP","value":"EQ"}}}],"fields":{"name":"OP1","value":"AND"}}},{"type":"statement","name":"DO0","block":{"type":"variables_set","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"logic_boolean","fields":{"name":"BOOL","value":"FALSE"}}},"fields":{"name":"VAR","value":"Override"},"next":{"type":"openhab_itemcmd","inline":"true","children":{"type":"value","name":"VALUE","block":{"type":"openhab_state_onoff","fields":{"name":"STATE","value":"OFF"}}},"fields":{"name":"ITEM","value":"Bath_Fan_State"}}}}],"fields":[{"name":"NUM","value":"20"},{"name":"PERIOD","value":"MINUTES"}]}}}}]}}],"fields":{"name":"NAME","value":"Bathroom Fan Controller"}},"source":"// This rule file is autogenerated by HABmin.\r\n// Any changes made manually to this file will be overwritten next time HABmin rules are saved.\r\n\r\n// Imports\r\nimport org.openhab.core.library.types.*\r\nimport org.openhab.core.persistence.*\r\nimport org.openhab.model.script.actions.*\r\nimport org.java.math.*\r\n\r\n// Global Variables\r\nvar boolean Override = false\r\nvar Timer _timerA = null\r\nvar Timer _timerB = null\r\n\r\n// Constants used to generate this rule\r\n// HumidityHIGH == 70\r\n// HumidityLOW == 68\r\n\r\nrule \"Bathroom Fan Controller\"\r\nwhen\r\nthen\r\n  if(Bath_Fan_Override == 0) {\r\n    sendCommand(Bath_Fan_State, OFF)\r\n  }\r\n  else if(Bath_Fan_Override == 1) {\r\n    sendCommand(Bath_Fan_State, ON)\r\n  }\r\n  else {\r\n  if((Bath_TempHum_Humidity > 70) || (Bed1_TempHum_Humidity > 70) || (Bed1_TempHum_AbsHumidity > (Bed1_TempHum_AbsHumidity * 1))) {\r\n    Override = true\r\n\r\n    sendCommand(Bath_Fan_State, ON)\r\n  }\r\n  else ifnull {\r\n    sendCommand(Bath_Fan_State, OFF)\r\n  }\r\n\r\n  if(Bath_Fan_State == OFF) {\r\n    if(_timerA == null) {\r\n      _timerA = createTimer(now.plusHours(3)) [|\r\n        Override = true\r\n\r\n        sendCommand(Bath_Fan_State, ON)\r\n      ]\r\n    }\r\n  }\r\n  else if(_timerA != null) {\r\n    _timerA.cancel()\r\n    _timerA = null\r\n  }\r\n\r\n  if((Bath_Fan_State == ON) && (Override == true)) {\r\n    if(_timerB == null) {\r\n      _timerB = createTimer(now.plusMinutes(20)) [|\r\n        Override = false\r\n\r\n        sendCommand(Bath_Fan_State, OFF)\r\n      ]\r\n    }\r\n  }\r\n  else if(_timerB != null) {\r\n    _timerB.cancel()\r\n    _timerB = null\r\n  }\r\n  }\r\nend\r\n\r\n\r\n"};
                Blockly.Json.setWorkspace(Blockly.getMainWorkspace(), x);

                // If there's a line style specified, then see if it's valid and use it
   /*             $scope.$watch("xngModel", function () {
                    // Clear any existing workspace
                    if (Blockly.getMainWorkspace() != null)
                        Blockly.getMainWorkspace().clear();

                    holdoff = true;
                    $timeout(function() {
                        holdoff = false;
                    }, 500);
                    Blockly.Json.setWorkspace(Blockly.getMainWorkspace(), $scope.ngModel);
                });*/

            }
        };
    });


