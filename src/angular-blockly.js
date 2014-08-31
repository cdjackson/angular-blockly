/**
 * blockly directive for AngularJS
 *
 * Author: Chris Jackson
 *
 * License: MIT
 */
angular.module("angular-blockly", [
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

    .directive('ngBlockly', function ($window, ngBlockly) {
        return {
            restrict: 'E',
            scope: { // Isolate scope
                ngModel: '='
            },
            template: '<div style="height:100%" class="ng-blockly"></div>',
            link: function ($scope, element, attrs) {
                var options = ngBlockly.getOptions();
                Blockly.inject(element.children()[0],
                    {
                        path: 'assets/',
                        trashcan: true,
                        toolbox: [
                            {
                                name: "Logic",
                                blocks: [
                                    {type: "logic_compare"},
                                    // BROKEN!                                  {type: "logic_operation"},
                                    {type: "logic_negate"},
                                    {type: "controls_if"},
//                                    {type: "openhab_iftimer"},
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
//                                    {type: "openhab_itemset"},
                                    //                                  {type: "openhab_itemget"},
                                    //                                {type: "openhab_itemcmd"},
                                    //                              {type: "openhab_persistence_get"},
                                    {type: "variables_set"},
                                    {type: "variables_get"},
                                    //                            {type: "openhab_constantget"},
                                    //                          {type: "openhab_constantset"},
                                    //                        {type: "openhab_state_onoff"},
                                    //                      {type: "openhab_state_openclosed"},
                                    {type: "text"}
                                ]
                            }
                        ]
                    });

                // If there's a line style specified, then see if it's valid and use it
                $scope.$watch("ngModel", function () {
                    // Clear any existing workspace
                    if (Blockly.getMainWorkspace() != null)
                        Blockly.getMainWorkspace().clear();

                    Blockly.Json.setWorkspace(Blockly.getMainWorkspace(), $scope.ngModel);
                });
            }
        };
    });
