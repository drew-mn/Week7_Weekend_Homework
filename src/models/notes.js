const RequestHelper = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beersData = [];
  this.abvs = [];
}

Beers.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers')
  requestHelper.get((data) => {
    PubSub.publish('Beers:beers-ready', data);
    this.publishAbv(data);
    console.log(data);
  });
}

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event)  => {
    const abvIndex = event.detail;
    this.publishBeersByAbv(abvIndex);
  })
};

Beers.prototype.publishAbv = function (data) {
  this.beersData = data;
  this.abvs = this.uniqueAbvList();
  PubSub.publish('Beers:abv-ready', this.abv);
}


Beers.prototype.abvList = function () {
  const fullList = this.beersData.map(beer => beer.abv);
  return fullList;
}

Beers.prototype.uniqueAbvList = function () {
  return this.abvList().filter((abv, index, array) => {
    return array.indexOf(abv) === index;
  });
}


Beers.prototype.beerByAbv = function (abvIndex) {
  const selectedAbv = this.abvs[abvIndex];
  return this.beersData.filter((beer) => {
    return beer.abv === selectedAbv;
  });
};

Beers.prototype.publishBeersByAbv = function (abvIndex) {
  const foundBeers = this.beerByAbv(abvIndex);
  PubSub.publish('Beers:beers-ready', foundBeers);
};

module.exports = Beers;
