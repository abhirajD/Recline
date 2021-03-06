var restApp = angular.module('restApp', []);

restApp.controller('Ctrl', ['$scope','$http',function($scope,$http) {
    
    $scope.restMethod = [
        {req : "GET"},
        {req : "POST"},
        {req : "PUT"},
        {req : "DELETE"}
    ];
    
    $scope.url = "";
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
        
        if($scope.urlParams){
            $scope.finalUrl = 'http://'+$scope.url +'?' + $scope.urlParams.substring(1);
            return $scope.finalUrl;
        }
        else{
            httphead = "http://";
            if($scope.url.indexOf(httphead) == -1){
                $scope.finalUrl = 'http://'+$scope.url;
                return $scope.finalUrl;
            }
            else{
                $scope.finalUrl = $scope.url;
                return $scope.finalUrl;
            }
        }
    };
    $scope.outStatus = "-";
    
    $scope.send = function() {
        if($scope.selectedReq.req === 'GET'){
            $http({method: 'GET', url: $scope.finalUrl}).
                    success(function(data, status) {
                        // console.log(data); 
                        $scope.outStatus = status;
                        $scope.outData = JSON.stringify(data, null, "    ");
                        $scope.outData = tidy_html5($scope.outData, options);
                        
                    }).
                    error(function(data, status) {
                        $scope.outData = data || "Request failed";
                        $scope.outStatus = status;
                    });
        }
        else if($scope.selectedReq.req === 'POST'){
            $http({method: 'POST', url: $scope.finalUrl}).
                    success(function(data, status) {
                        // console.log(data); 
                        $scope.outStatus = status;
                        $scope.outData = JSON.stringify(data, null, "    ");
                        $scope.outData = tidy_html5($scope.outData, options);
                    }).
                    error(function(data, status) {
                        $scope.outData = data || "Request failed";
                        $scope.outStatus = status;
                    });
        }
        else if($scope.selectedReq.req === 'PUT'){
            $http({method: 'PUT', url: $scope.finalUrl}).
                    success(function(data, status) {
                        // console.log(data); 
                        $scope.outStatus = status;
                        $scope.outData = JSON.stringify(data, null, "    ");
                        $scope.outData = tidy_html5($scope.outData, options);
                    }).
                    error(function(data, status) {
                        $scope.outData = data || "Request failed";
                        $scope.outStatus = status;
                    });
        }else if($scope.selectedReq.req === 'DELETE'){
            $http({method: 'DELETE', url: $scope.finalUrl}).
                    success(function(data, status) {
                        // console.log(data); 
                        $scope.outStatus = status;
                        $scope.outData = JSON.stringify(data, null, "    ");
                        $scope.outData = tidy_html5($scope.outData, options);
                    }).
                    error(function(data, status) {
                        $scope.outData = data || "Request failed";
                        $scope.outStatus = status;
                    });
        }
        else{
            $scope.outStatus = "Bumm.. Select a method!";
        }
    };
}]);


restApp.directive('demoDisplay', function($compile) {
  return {
    scope: {
      demoDisplay: "=", //import referenced model to our directives scope
      demoDays: "="
    },
    template: "<div class='input_params'><input class='form-control' ng-model = 'demoDisplay.key' ng-click = 'addParams()' placeholder='Key'><input class='form-control' ng-model = 'demoDisplay.value' placeholder='Value'>"
  }
})

