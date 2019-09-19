
/* global Store, calculators */

// eslint-disable-next-line no-unused-vars
const Meal = (function(){
  
  // validate meal to confirm all values are present

  let validateMeal = function(meal = Object) {
    try {
      meal.price && meal.tax && meal.tip;
    } catch (e) {
      throw new Error('Meal must contain: price, tax, tip percentage');
    }
  };

  // create new meal if meal object is valid

  let createMeal = function(meal = Object) {
    validateMeal(meal);
    Store.meals.push({price: meal.price, tax: meal.tax, tip: meal.tip});
  };

  let clearMealData = function() {
    Store.meals = [];
  };

  let handleMealSubmit = function() {
    $('.js-calculator').on('submit', (e) => {
      e.preventDefault();
      const price = parseFloat(e.target.price.value);
      const tax = parseFloat(e.target.tax.value);
      const tip = parseFloat(e.target.tip.value);
      createMeal({price, tax, tip});
      $('.js-calculator').trigger('reset');
      calculators.tallySubtotal();
      calculators.render();
    });
  };

  let handleTallyReset = function() {
    $('.reset-tally').on('click', () => {
      clearMealData();
      calculators.tallySubtotal();
      calculators.render();
    });
  };
  
  return {
    handleMealSubmit,
    handleTallyReset
  };
}());