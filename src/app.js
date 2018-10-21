const Beers = require('./models/brewdog.js');
const SelectView = require('./views/select_view.js');
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#abv-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#beer-list');
  const beerListView = new BeerListView(listContainer);
  beerListView.bindEvents();

  const beers = new Beers();
  beers.bindEvents();
  beers.getData();

});
