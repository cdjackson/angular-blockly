/**
 * blockly directive for AngularJS
 *
 * Author: Chris Jackson
 *
 * License: MIT
 */
angular.module("angular-blockly", [
])
    .directive('ngBlockly', function ($window, $sce) {
        return {
            restrict: 'E',
            scope: { // Isolate scope
                data: '=',
                options: '=',
                legend: '=?'
            },
            template: '<div class="ng-blockly"></div>',
            link: function (scope, element, attrs) {

                Blockly.inject(element.children()[0],
                    {
                        path: './blockly/',
                        trashcan: true,
                        toolbox: [
                            {
                                name: "Logic",
                                blocks: [
                                    {type: "controls_if"},
                                    {type: "logic_compare"},
                                    {type: "logic_operation"},
                                    {type: "logic_negate"},
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
                                    {type: "math_constrain"}
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
            }
        };
    });
