/**
 * Created by zura on 12/10/2017.
 */
(function () {
    'use strict';

    angular.module('app', [
        'lobilist'
    ])
        .controller('LobiListDemoController', ['$scope', LobiListDemoController]);

    function LobiListDemoController($scope) {
        var vm = this;
        vm.panelTitle = "Lorem ipsum title";
        vm.options = {
            lists: [
                {
                    title: 'TODO',
                    defaultStyle: 'lobilist-info',
                    items: [
                        {
                            title: 'Floor cool cinders',
                            description: 'Thunder fulfilled travellers folly, wading, lake.',
                            dueDate: '2015-01-31'
                        },
                        {
                            title: 'Periods pride',
                            description: 'Accepted was mollis',
                            done: true
                        },
                        {
                            title: 'Flags better burns pigeon',
                            description: 'Rowed cloven frolic thereby, vivamus pining gown intruding strangers prank treacherously darkling.'
                        },
                        {
                            title: 'Accepted was mollis',
                            description: 'Rowed cloven frolic thereby, vivamus pining gown intruding strangers prank treacherously darkling.',
                            dueDate: '2015-02-02'
                        }
                    ]
                },
                {
                    title: 'DOING',
                    items: [
                        {
                            title: 'Composed trays',
                            description: 'Hoary rattle exulting suspendisse elit paradises craft wistful. Bayonets allures prefer traits wrongs flushed. Tent wily matched bold polite slab coinage celerities gales beams.'
                        },
                        {
                            title: 'Chic leafy'
                        },
                        {
                            title: 'Guessed interdum armies chirp writhes most',
                            description: 'Came champlain live leopards twilight whenever warm read wish squirrel rock.',
                            dueDate: '2015-02-04',
                            done: true
                        }
                    ]
                }
            ]
        };

        vm.events = {
            init: function () {
                console.log("initialized");
            },
            beforeUnpin: function () {
                console.log("333333333333");
            }
        };

    }
})();