//*quanity ->sub from total quanity
//avgPrice() -->[keeps track of price bought at], returns avg price
//currentPrice
//updateBalance() send se;; function to chris

myApp.controller('SellController', ['fleaMarketService', '$interval', function(fleaMarketService, $interval) {
console.log("sourced for Sell!");
var sell = this;

sell.sellItem = fleaMarketService.sellItem;




sell.buyFunc = fleaMarketService.buyFunc;

sell.fruitObject = fleaMarketService.fruitObject;
sell.electronicObject = fleaMarketService.electronicObject;
sell.collectableObject = fleaMarketService.collectableObject;
// sell.updater = fleaMarketService.updater;

$interval(function(){
  fleaMarketService.updater();
  console.log("this ran");
  console.log(fleaMarketService.fruitObject);
}, 5000);

//need Class from factory

}]);
