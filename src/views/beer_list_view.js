const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view');
const SelectView = require('./select_view');

const BeerListView = function (container) {
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (evt) => {
    this.clearList();
    this.renderBeerDetailViews(evt.detail);

  });
};

BeerListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

BeerListView.prototype.renderBeerDetailViews = function (beers) {
  beers.forEach((beer) => {
    const beerItem = this.createBeerListItem(beer);
    this.container.appendChild(beerItem);
  });
};

BeerListView.prototype.createBeerListItem = function (beer) {
  const beerDetailView = new BeerView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  return beerDetail;
};

module.exports = BeerListView;
