/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking A Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', (I) => {
  I.dontSeeElement('content-item');
});

Scenario('liking one restaurant', async (I) => {
  I.dontSeeElement('content-item');
  I.amOnPage('/');

  const firstRestaurant = locate('.content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const firstRestaurantFav = locate('.content-title').first();
  const firstRestaurantFavTitle = await I.grabTextFrom(firstRestaurantFav);
  I.seeElement(firstRestaurantFav);
  assert.strictEqual(firstRestaurantTitle, firstRestaurantFavTitle);
});

Scenario('unliking a restaurant', async (I) => {
  I.dontSeeElement('content-item');
  I.amOnPage('/');

  const firstRestaurant = locate('.content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const firstRestaurantFav = locate('.content-title').first();
  const firstRestaurantFavTitle = await I.grabTextFrom(firstRestaurantFav);
  I.seeElement(firstRestaurantFav);
  assert.strictEqual(firstRestaurantTitle, firstRestaurantFavTitle);
  I.click(firstRestaurantFav);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.no-favorite');
});
