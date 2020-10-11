(function () {
  'use strict';

  angular
    .module('data')
    .controller('ItemsCtrl', ItemsCtrl);

  ItemsCtrl.$inject = ['items', '$stateParams'];
  function ItemsCtrl(items, $stateParams) {

   
    var itemsList = this;
    itemsList.pageTitle = 'Elenco prodotti per la categoria:';
    itemsList.items = items;
    itemsList.catName = $stateParams.categoryId;

  }

}());