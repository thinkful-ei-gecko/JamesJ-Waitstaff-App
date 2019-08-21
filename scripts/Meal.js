'use strict';
/* global Store */

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
  
  return {
    createMeal
  };
}());

console.log(Meal.createMeal({price: 12, tax: 7, tip: 30}));