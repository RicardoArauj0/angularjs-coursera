(function() {
  'use strict';

  angular.module('app', []);

  angular.module('app')
  .controller('ToBuy', ToBuy)
  .controller('AlreadyBought', AlreadyBought)
  .service('ListService', ListService);

  ToBuy.$inject=['ListService'];
  function ToBuy(ListService){
    var vm = this;
    vm.buyEmpty = false;
    vm.boughtEmpty = true;
    
    vm.itemsBuy = ListService.getItems(true);

    vm.removeItem = function (itemIndex) {
      vm.name = vm.itemsBuy[itemIndex].name;
      vm.quantity = vm.itemsBuy[itemIndex].quantity;

      ListService.removeItemService(itemIndex);

      ListService.addItemService(vm.name, vm.quantity);

      if(vm.itemsBuy.length <= 0){
        vm.buyEmpty = true;
      }

      if (ListService.getItems(false).length >= 0) {
        vm.boughtEmpty = false;
      }

    }

  }

  AlreadyBought.$inject=['ListService'];
  function AlreadyBought(ListService){
    var vm = this;
    vm.itemsBought = ListService.getItems(false);
  }

  function ListService() {
    var vm = this;

    // List of shopping items
    var itemsBuy = [
      { name: 'Cookie',
        quantity: 10
      },
      { name: 'Juice',
        quantity: 8
      },
      { name: 'Soda',
        quantity: 2
      },
      { name: 'Tacos',
        quantity: 15
      },
      { name: 'Snacks',
        quantity: 10
      },
    ];
    var itemsBought = [];

    vm.addItemService = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsBought.push(item);
    };

    vm.removeItemService = function (itemIdex) {
      itemsBuy.splice(itemIdex, 1);
    };

    vm.getItems = function (buy) {
      if (buy) {
          return itemsBuy;
      } else {
          return itemsBought;
      }

    };
 }

})();
