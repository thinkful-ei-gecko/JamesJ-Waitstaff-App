'use strict';

/* global calculators */

// eslint-disable-next-line no-unused-vars
const calculators = (function(){
  let render = function() {
    $('.js-customer').html(
      `
      <li class="js-customer-form">
        Subtotal:
      </li>
      <li class="js-customer-form">
        Tip:
      </li>
      <li class="js-customer-form">
        Total:
      </li>
      `
    );
    $('.js-earnings').html(
      `
      <li class="js-earnings-form">
        Tip Total:
      </li>
      <li class="js-earnings-form">
        Meal count:
      </li>
      <li class="js-earnings-form">
        Average Tip Per Meal:
      </li>
      `
    );
  };
  return {
    render
  };
}());