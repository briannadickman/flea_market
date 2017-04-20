//factory
myApp.factory('fleaMarketService', function() {

//class MarketItem {currentPrice, name, quantity, avePrice(), iniital price -> stretch}
//Create Parent Class
class FleaMarketItem {
    constructor ( name, quantity, currentPrice, averagingArray, averagePrice, image ){
      this.name = name;
      this.quantity = quantity;
      this.currentPrice = currentPrice;
      this.averagingArray = averagingArray;
      this.averagePrice = averagePrice;
      this.image = image;
    };
}
  //children (smallElec, fruits, collectables)
// Create Electronic Child
class Electronic extends FleaMarketItem {
    constructor ( name, quantity, currentPrice, averagingArray, averagePrice, image ) {
      super ( name, quantity, currentPrice, averagingArray, averagePrice, image );
    }
}
// Create Fruit Child
class Fruit extends FleaMarketItem {
  constructor ( name, quantity, currentPrice, averagingArray, averagePrice, image ) {
    super ( name, quantity, currentPrice, averagingArray, averagePrice, image );
    }
}
// Create Collectable Child
class Collectable extends FleaMarketItem {
  constructor ( name, quantity, currentPrice, averagingArray, averagePrice, image ) {
    super ( name, quantity, currentPrice, averagingArray, averagePrice, image );
    }
}
// Electronic Children
var toaster = new Electronic('Toaster', 0, 6.43,[], 6.43, 'views/images/toaster.png');
var lamp = new Electronic('Lamp', 0, 5.23,[], 5.23, 'views/images/lamp.png');
var bluRayPlayer = new Electronic('Blu Ray Player', 0, 8.15,[], 8.15, 'views/images/blue_ray_player.png');
var clock = new Electronic('Clock', 0, 4.44,[], 4.44, 'views/images/clock.png');

// Fruit Children
var apple = new Fruit('Apple', 0, 0.45,[], 0.45, 'views/images/apple.png');
var orange = new Fruit('Orange', 0, 1.22,[], 1.22, 'views/images/orange.png');
var banana = new Fruit('Banana', 0, 8.88,[], 8.88, 'views/images/banana.png');
var grapes = new Fruit('Grapes', 0, 3.32,[], 3.32, 'views/images/grapes.png');

// Collectable Children
var comicBook = new Collectable('Comic Books', 0, 3.41,[], 3.41, 'views/images/comic_book.png');
var fancyStuffedAnimal = new Collectable('Fancy Stuffed Animals', 0, 5.46,[], 5.46, 'views/images/fancy_stuffed_animal.png');
var jewelry = new Collectable('Jewelry', 0, 7.55,[], 7.55, 'views/images/jewelry.png');
var wine = new Collectable('Wine', 0, 6.56,[], 6.56, 'views/images/wine.png');

//
var electronicObject = {items: [ toaster, lamp, bluRayPlayer, clock]};
var fruitObject = {items: [ apple, orange, banana, grapes]};
var collectableObject = {items: [ comicBook, fancyStuffedAnimal, jewelry, wine]};

//updateBalance() -->add/subtract --> return accountBalance

let accountBalance = {
  amount: 100
};

let buyFunc = (thisItem) => {
  if((accountBalance.amount - thisItem.currentPrice) > 0){
    accountBalance.amount = accountBalance.amount - thisItem.currentPrice;
    accountBalance.amount = Math.round(accountBalance.amount * 100)/100;
    thisItem.averagingArray.push(thisItem.currentPrice);
    thisItem.quantity++;
    averagingFunc(thisItem);
  }
  else{
    return false;
  }
};

var averagingFunc = (thisItem) => {
  var sum = 0;
  for( var i = 0; i < thisItem.averagingArray.length; i++ ){
      sum += parseInt( thisItem.averagingArray[i], 10 );
      console.log("sum is: ", sum);
  }
  var avg = sum/thisItem.averagingArray.length;
  console.log("avg is: ", avg);
  thisItem.averagePrice = Math.round(avg * 100)/100;
};

let sellItem = (thisItem) => {
    if(thisItem.quantity - 1 >= 0){
      accountBalance.amount = accountBalance.amount + thisItem.currentPrice;
      accountBalance.amount = Math.round(accountBalance.amount * 100)/100;
      thisItem.quantity--;
    }
    // else{
    //
    // }
};

//adjPrice

var updater = function(){
  for(let i = 0; i < electronicObject.items.length; i++){
    thisItem = electronicObject.items[i];
    adjAmt(thisItem);
  }
  for(let i = 0; i < fruitObject.items.length; i++){
    thisItem = fruitObject.items[i];
    adjAmt(thisItem)
  }
  for(let i = 0; i < collectableObject.items.length; i++){
    thisItem = collectableObject.items[i];
    adjAmt(thisItem)
  }
};

function adjAmt(thisItem) {
  var priceAdjustment = (100 * (Math.random() - 0.5));
  priceAdjustment = (parseInt(priceAdjustment))/100;
  adjPrice(thisItem, priceAdjustment);
}

function adjPrice(thisItem, priceAdjustment) {
  if(priceAdjustment !== 0.00){
    changePrice(thisItem, priceAdjustment);
  } else {
    adjAmt(thisItem, priceAdjustment);
  }
}

function changePrice(thisItem, priceAdjustment) {
  if((thisItem.currentPrice + priceAdjustment) > 0 && (thisItem.currentPrice + priceAdjustment) < 10){
    thisItem.currentPrice = Math.round((thisItem.currentPrice + priceAdjustment) * 100)/100;
    return thisItem.currentPrice;
  } else{
    adjAmt(thisItem, priceAdjustment);
  }
}

  return {
    fruitObject : fruitObject,
    collectableObject : collectableObject,
    electronicObject : electronicObject,
    accountBalance : accountBalance,
    updater: updater,
    sellItem: sellItem,
    buyFunc: buyFunc
  };
});
