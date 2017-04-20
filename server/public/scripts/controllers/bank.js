//accountBalance
//  -add to bal
//  -sub from bal
//  -not below 0
myApp.controller('BankController', ['fleaMarketService', function(fleaMarketService) {
  var bank = this;
  bank.accountBalance = fleaMarketService.accountBalance;
}]);
