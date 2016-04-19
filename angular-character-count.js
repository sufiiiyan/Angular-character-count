/**
 * @author Sufiyan momin
 * @description Add character count to input 
 * for example <input class="form-control" type="text" placeholder="Type here" 
 * name="firstFormName" ng-model="userInfoData.first_name" 
 * ng-maxlength="50" char-count warning-count="10" danger-count="5">
 */

angular.module('angular-character-count', []).directive('charCount', ['$parse', '$compile', function ($parse, $compile) {
    return {
        require: 'ngModel',

        link: function (scope, element, attr, ngModel) {
            var idP = Math.round(Math.random() * 1000000000);

            $(element).after('<p id=' + idP + '></p>');
            scope.$watch(function () {
                    
                    return ngModel.$viewValue;
                },
                function (newValue) {
                    
                    if (angular.isDefined(newValue)) {

                        var remainingChar = attr.ngMaxlength - newValue.length;
                         var remaiSpan = "<p>" + remainingChar + " of " + attr.ngMaxlength + " characters left</p>";
                        $('#' + idP).html(remaiSpan);
                        
                        if (remainingChar > attr.warningCount && remainingChar > attr.dangerCount) {
                            $('#' + idP).removeClass('warningCharacter');
                            $('#' + idP).removeClass('dangerCharacter');
                            $('#' + idP).addClass('normalCharacter');
                        } else {
                            if (remainingChar <= attr.warningCount && remainingChar > attr.dangerCount) {
                                $('#' + idP).addClass('warningCharacter');
                                $('#' + idP).removeClass('dangerCharacter');
                                $('#' + idP).removeClass('normalCharacter');
                            } else {
                                $('#' + idP).removeClass('warningCharacter');
                                $('#' + idP).removeClass('normalCharacter');
                                $('#' + idP).addClass('dangerCharacter');
                            }
                        }
                    }
                }
            );

            
     


        }
    };
}]);