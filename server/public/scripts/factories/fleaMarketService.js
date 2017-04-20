//factory
myApp.factory('fleaMarketService', function() {

//class MarketItem {currentPrice, name, quanity, avePrice(), iniital price -> stretch}
//Create Parent Class
class FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice, averagePrice, image ){
      this.name = name;
      this.quantity = quantity;
      this.initialPrice = initialPrice;
      this.currentPrice = currentPrice;
      this.averagePrice = averagePrice;
      this.image = image;
    };
}
  //children (smallElec, fruits, collectables)
// Create Electronic Child
class Electronic extends FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice, averagePrice, image ) {
      super ( name, quantity, initialPrice, currentPrice, averagePrice, image );
    }
}
// Create Fruit Child
class Fruit extends FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice , averagePrice, image) {
      super ( name, quantity, initialPrice, currentPrice, averagePrice, image );
    }
}
// Create Collectable Child
class Collectable extends FleaMarketItem {
    constructor ( name, quantity, initialPrice, currentPrice, averagePrice, image ) {
      super ( name, quantity, initialPrice, currentPrice, averagePrice, image );
    }
}
// Electronic Children
var toaster = new Electronic('Toaster', 0, 6.43, 0, 6.43, 'views/images/toaster.png');
var lamp = new Electronic('Lamp', 0, 5.23, 0, 5.23, 'views/images/lamp.png');
var bluRayPlayer = new Electronic('Blu Ray Player', 0, 8.15, 0, 8.15, 'views/images/blue_ray_player.png');
var clock = new Electronic('Clock', 0, 4.44, 0, 4.44, 'views/images/clock.png');

// Fruit Children
var apple = new Fruit('Apple', 0, 0.45, 0, 0.45, 'views/images/apple.png');
var orange = new Fruit('Orange', 0, 1.22, 0, 1.22, 'views/images/orange.png');
var banana = new Fruit('Banana', 0, 8.88, 0, 8.88, 'views/images/banana.png');
var grapes = new Fruit('Grapes', 0, 3.32, 0, 3.32, 'views/images/grapes.png');

// Collectable Children
var comicBook = new Collectable('Comic Books', 0, 3.41, 0, 3.41, 'views/images/fancy_stuffed_animal.png');
var fancyStuffedAnimal = new Collectable('Fancy Stuffed Animals', 0, 5.46, 0, 5.46, 'views/images/toaster.png');
var jewelry = new Collectable('Jewelry', 0, 7.55, 0, 7.55, 'views/images/jewelry.png');
var wine = new Collectable('Wine', 0, 6.56, 0, 6.56, 'views/images/wine.png');

//
var electronicObject = {items: [ toaster, lamp, bluRayPlayer, clock]};
var fruitObject = {items: [ apple, orange, banana, grapes]};
var collectableObject = {items: [ comicBook, fancyStuffedAnimal, jewelry, wine]};

//updateBalance() -->add/subtract --> return accountBalance

let myBalance = {
  amount: 100
};

let buyFunc = (thisItem) => {
  if((myBalance.amount - thisItem.currentPrice) > 0){
    myBalance.amount = myBalance.amount - thisItem.currentPrice;
    thisItem.avgArray.push(thisItem.currentPrice);
  }
  else{
    return false;
  }
};

let averagingFunc = (thisItem) => {
  let sum = 0;
  for( var i = 0; i < thisItem.avgArray; i++ ){
      sum += parseInt( thisItem.avgArray[i], 10 );
  }
  var avg = sum/thisItem.avgArray.length;
};

let sellFunc = (thisItem) => {
  if((myBalance.amount + thisItem.currentPrice) < 10){
    myBalance.amount = myBalance.amount + thisItem.currentPrice;
  }
  else{
    return false;
  }
};

//adjPrice
var currentPrice = {
  price: 1.35
}; //testing

var setTimer = setInterval(function(){ addOrSubtract() }, 15000);

function addOrSubtract() {
  var priceAdjustment = (100 * (Math.random() - 0.5));
  priceAdjustment = (parseInt(priceAdjustment))/100;
  adjPrice(priceAdjustment);
}

function adjPrice(priceAdjustment) {
  if(priceAdjustment !== 0.00){
    changePrice(priceAdjustment);
  } else {
    addOrSubtract();
  }
}

function changePrice(priceAdjustment) {
  if((currentPrice.price + priceAdjustment) > 0){
    currentPrice.price = Math.round((currentPrice.price + priceAdjustment) * 100)/100;
    console.log(currentPrice.price);
    return currentPrice.price;
  } else{
    addOrSubtract();
  }
}

  return {
    // FleaMartetItem : FleaMarketItem,
    fruitObject : fruitObject,
    collectableObject : collectableObject,
    electronicObject : electronicObject,
    myBalance : myBalance,
    currentPrice : currentPrice //testing
  };
});
