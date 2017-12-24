/**
 * Created by zura on 12/10/2017.
 */
(function () {
    'use strict';

    angular.module('lobilist')
        .directive('lobilist', ['$timeout', lobilist])
    ;

    function lobilist($timeout) {
        return {
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {
                style: '@style',
                heading: '@heading',
                options: '=',
                events: '='
            },
            template: ``,
            link: function (scope, el, attrs) {
                console.log("mdaaa");
                $timeout(function(){
                    console.log(scope.options);
                    $(el).lobiList(scope.options);
                });
            }
        }
    }

})();