'use strict';

/* global Store */

// eslint-disable-next-line no-unused-vars
const calculators = (function(){

  // Create function to grab items from store and, for each item in store,
  // keep running raw cost of all meals

  let tallySubtotal = function() {
    let tally = 0.00;
    Store.meals.forEach(meal => {
      tally += meal.price + (meal.price * meal.tax / 100);
    });
    return tally;
  };

  // Create function to grab meals stored and, for each item, 
  // tally total amount tipped per meal

  let tallyTipTotal = function() {
    let tally = 0.00;
    Store.meals.forEach( meal => {
      tally += meal.price * meal.tip / 100;
    });
    return tally;
  };

  // create a tally of all meals logged so far
  let mealTally = () => Store.meals.length;

  // add new meal to existing meals

  // let addNewMeal = function(price = Number, taxRate = Number, tipPercentage = Number) {

  // };

  let render = function() {
    let subtotal = this.tallySubtotal();
    let tipTotal = this.tallyTipTotal();
    let meals = this.mealTally();
    let grandTotal = subtotal + tipTotal;
    let tipAverage = meals > 0 ? tipTotal / meals : 0;
    $('.js-customer').html(
      `
      <li class="js-customer-form">
        Subtotal: ${subtotal.toFixed(2)}
      </li>
      <li class="js-customer-form">
        Tip: ${tipTotal.toFixed(2)}
      </li>
      <li class="js-customer-form total-input">
        Total: ${grandTotal.toFixed(2)}
      </li>
      `
    );
    $('.js-earnings').html(
      `
      <li class="js-earnings-form">
        Tip Total: ${tipTotal.toFixed(2)}
      </li>
      <li class="js-earnings-form">
        Meal count: ${meals} meals
      </li>
      <li class="js-earnings-form">
        Average Tip Per Meal: ${tipAverage.toFixed(2)}
      </li>
      `
    );
  };
  return {
    render,
    tallySubtotal,
    tallyTipTotal,
    mealTally
  };
}());