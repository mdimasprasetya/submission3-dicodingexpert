/* eslint-disable no-undef */
Feature('reviewing a restaurant');

Before((I) => {
  I.amOnPage('/');
});

Scenario('create review failed and popup error alertify', async (I) => {
  const firstRestaurant = locate('.content-title').first();
  I.click(firstRestaurant);
  I.seeElement('#inputName');
  I.fillField('#inputName', '');
  I.seeElement('#inputReview');
  I.fillField('#inputReview', '');
  I.click('//button[contains(text(),"Submit")]');
  I.seeElement('.ajs-message.ajs-error.ajs-visible');
});

Scenario('create review success and popup success alertify', async (I) => {
  const firstRestaurant = locate('.content-title').first();
  I.click(firstRestaurant);
  I.seeElement('#inputName');
  I.fillField('#inputName', 'test review name');
  I.seeElement('#inputReview');
  I.fillField('#inputReview', 'test review');
  I.click('//button[contains(text(),"Submit")]');
  I.seeElement('.ajs-message.ajs-success.ajs-visible');
});
