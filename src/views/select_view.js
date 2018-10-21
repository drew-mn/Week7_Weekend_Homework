const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request.js');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};


SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (event) => {
    this.populateSelect(event.detail);
  });

  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

// SelectView.prototype.populateSelect = function (abvs) {
//   abvs.forEach( (beer, index) => {
//       const option = document.createElement('option');
//       option.textContent = beer.abv;
//       option.value = index;
//       this.selectElement.appendChild(option);
//   } )
//
// };

  SelectView.prototype.populateSelect = function (abvs) {
    abvs.forEach( (beer, index) => {
      const option = document.createElement('option');
      option.textContent = `ABV  ${beer.abv}%`
      option.value = index;
      this.selectElement.appendChild(option);
    } )

};

module.exports = SelectView;

// const weakBeers = abvs.filter(beer => beer.abv <= 4.5);
// const medBeers = abvs.filter(beer => beer.abv > 4.5 && beer.abv <= 7.5);
// const strongBeers = abvs.filter(beer => beer.abv > 7.5 && beer.abv <= 50);
