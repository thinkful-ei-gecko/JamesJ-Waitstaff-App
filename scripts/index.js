'use strict';

/* global calculators, Meal */

function main(){
  calculators.render();
  calculators.tallySubtotal();
  Meal.handleMealSubmit();
  Meal.handleTallyReset();
}

$(main);