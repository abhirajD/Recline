var restApp = angular.module('restApp', []);

restApp.controller('Ctrl', function($scope) {
    
    $scope.restMethod = [
        {req : "GET"},
        {req : "POST"},
        {req : "PUT"},
        {req : "DELETE"}
    ];
    
    $scope.url = "Enter URL Here";
    $scope.finalUrl = "";
    
    var counter = 0;
    $scope.param = {
    fields: []
    }
    
    $scope.addParams = function(){
        $scope.param.fields.push({
            name: "Param" + counter++
        });
    };
    
    
    $scope.makeUrl = function() {
        $scope.urlParams = '';
    
        angular.forEach($scope.param.fields, function(item) {
            if(item.key)
            {
                if(item.value)
                {
                    $scope.urlParams += "&" + item.key + '=' + item.value;
                }
            };
        });
        
        if($scope.urlParams)
            $scope.finalUrl = $scope.url +'?' + $scope.urlParams.substring(1);
            return $scope.finalUrl;
        else
            $scope.finalUrl = $scope.url;
            return $scope.finalUrl;
    };
    
    
    
});


restApp.directive('demoDisplay', function($compile) {
  return {
    scope: {
      demoDisplay: "=", //import referenced model to our directives scope
      demoDays: "="
    },
    template: "<input ng-model = 'demoDisplay.key' ng-click = 'addParams()'><input ng-model = 'demoDisplay.value'>"
  }
})