(function () {
  'use strict';

  angular
    .module('data')
    .constant('ClientAPI', 'https://davids-restaurant.herokuapp.com/')
    .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http','ClientAPI'];
  function MenuDataService ($http,ClientAPI) {
    var mds = this;

    
    mds.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: (ClientAPI + 'categories.json'),
      }).then(function(result){
        return result.data;
      })
    };

   
    mds.getItemsForCategory = function(categoryShortName) {

      return $http({
        method: 'GET',
        url: (ClientAPI + 'menu_items.json'),
        params: {
          category: categoryShortName
        }
      }).then(function(result){
        return result.data.menu_items;
      })

    }

  }

}());