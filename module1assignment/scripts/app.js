(function() {
  'use strict';

  angular.module('app', []);

  angular.module('app').controller('ToMuch', CalculateToMuch);
  CalculateToMuch.$inject=['$scope'];

  function CalculateToMuch($scope){
    //implemeting Jhon Papa syntaxAs style guide
    var vm = this;
    vm.food = "";
    vm.message = "";
    vm.calculate = calculate;
    console.log(vm.food);

    function calculate(){
      var foodsNumber = vm.food.split(",");
      var number = foodsNumber.length;

      if( number === 1 && foodsNumber[0] === ""){
        vm.message = "Please enter data first";
      } else if(number <= 3){
        vm.message = "Enjoy!";
      } else if (number > 3){
        vm.message = "Too much!";
      } else if ((number === 0) || (vm.food === "")){
        vm.message = "Please enter data first";
      } else {
        vm.message = "Please enter data first";
      }

    }


  }



})();
