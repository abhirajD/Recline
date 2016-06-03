var restApp = angular.module('restApp', []);

restApp.controller('Ctrl', function($scope) {
    
    $scope.restMethod = [
        {req : "GET"},
        {req : "POST"},
        {req : "PUT"},
        {req : "DELETE"}
    ];
    
    $scope.url = "Enter URL Here";
    
    var counter = 0;
    $scope.param = {
    fields: []
    }
    $scope.days = ['Day', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    $scope.addParams = function(){
        $scope.param.fields.push({
            name: "Param" + counter++
        });
    };
    
});

restApp.directive('demoDisplay', function($compile) {
  return {
    scope: {
      demoDisplay: "=", //import referenced model to our directives scope
      demoDays: "="
    },
    template: "<input ng-model = 'demoDisplay.key'><input ng-model = 'demoDisplay.value'>"
  }
})