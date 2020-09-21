(function (){
    angular.module("LunchCheck",[])
    .controller("LunchCheckController",function($scope) {
        $scope.name = "";
        $scope.innervalue = null;
        $scope.change = function() {
            $scope.innervalue = totalcalc($scope.name);
        };
        function totalcalc(string) {
            p = string.split(",").length;
            if(string.length === 0) {
                return "Please enter data first";
            }
            else if (p >= 1 && p <= 3) return "Enjoy!";
            else if (p > 3) return "Too much!";
        };
    });
})();
