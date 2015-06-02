console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});

        //    (#1)      //
var itemsPrices = items.map(function (element){
  var prices = (element.price);
  return prices;
})
 var itemsPricesTotal = itemsPrices.reduce(function (accumulator, current){
   accumulator = accumulator + current;
  return accumulator;
})

var averagePrice = itemsPricesTotal / itemsPrices.length;

document.querySelector("#answer1").innerHTML = averagePrice;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
        //    (#2)      //

// NOTES //
// [1,2,3,4].map(function(elm){
//   return elm * 2
// })
//
// [1,2,3,4].filter(function(elm){
//   return elm * 2;
// })

var itemsRightPrice = items.filter(function(ele){
  return ele.price >= 14.00 && ele.price <= 18.00;
});


var itemsRightPriceTitle = itemsRightPrice.map(function(ele){
  return ele.title;
});

document.querySelector("#answer2").innerHTML = itemsRightPriceTitle;
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
      //    (#3)    //


var itemGBP = items.filter(function(element){
  return element.currency_code === "GBP";
});

var item_GBP_Title = itemGBP.map(function(element){
  return element.title;
});

var item_GBP_Price = itemGBP.map(function(element){
  return element.price;
});

document.querySelector("#answer3").innerHTML = item_GBP_Title + item_GBP_Price;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
      //      (#4)      //
var itemWood = items.filter(function(element){
  return _.contains(element.materials, "wood")
})
// }).map(function(element){
//   return {title: element.title, price: element.price}
// });

var woodTitle = itemWood.map(function(element){
  return element.title;
});

document.querySelector('#answer4').innerHTML = woodTitle;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
      //     (#5)     //
var matEight = items.filter(function(obj){
  return obj.materials.length >= 8;
});

var fiveAnswer = matEight.map(function(element){
  return element.title + element.materials +element.materials.length;
});

document.querySelector("#answer5").innerHTML = fiveAnswer;

// ++++++++++++++++++++++++ //

      // (#6) //
// var who = items.filter(function(obj){
//   return obj.who_made;
// });

var WhoHowMany = items.filter(function(obj){
  return _.contains(obj, "i_did")
});

document.querySelector("#answer6").innerHTML = WhoHowMany.length;
