//quantity
//currentPrice
//updateBalance() -->puts currentPrice in avePrice send buy function to chris


myApp.controller('BuyController', ['fleaMarketService', function(fleaMarketService) {
  console.log("BuyController sourced!");
  var buy = this;
  buy.submit = function(){
    console.log('in BuyController');

  };

}]);
