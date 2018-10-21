const BeerDetailView = function () {

}

BeerDetailView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

  const name = document.createElement('h2');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  // const abv = document.createElement('h3');
  // abv.textContent = beer.abv;
  // beerDetail.appendChild(abv);

  const img = document.createElement('img')
  beerDetail.appendChild(img)
  img.src = beer.image_url

  const tagline = document.createElement('h3');
  tagline.textContent = beer.tagline;
  beerDetail.appendChild(tagline);

  // const tagline = this.createDetailListItem(beer.tagline);
  // detailsList.appendChild(tagline);

  const detailsList = document.createElement('ul');

  beerDetail.appendChild(detailsList);
  return beerDetail;

};


BeerDetailView.prototype.createDetailListItem = function (label) {
  const element = document.createElement('li');
  element.textContent = `${label}`;
  return element;

};

module.exports = BeerDetailView;
