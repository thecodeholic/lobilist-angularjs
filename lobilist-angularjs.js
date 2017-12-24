'use strict';

/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('lobilist', []);
})();
'use strict';

/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('lobilist').controller('LobiListController', LobiListController);

  function LobiListController() {}
})();
'use strict';

/**
 * Created by zura on 12/10/2017.
 */
(function () {
    'use strict';

    angular.module('lobilist').directive('lobilist', ['$timeout', '$compile', lobilist]);

    function lobilist($timeout, $compile) {
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
            template: '',
            link: function link(scope, el, attrs) {
                $timeout(function () {
                    scope.options = scope.options || {};
                    scope.options.forAngularJs = true;
                    $(el).lobiList(scope.options);
                    $compile(el.contents())(scope);
                });
            }
        };
    }
})();