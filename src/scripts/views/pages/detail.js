/* eslint-disable prefer-const */
import { async } from 'regenerator-runtime';
import alertify from 'alertifyjs';
import UrlParser from '../../routes/url-parser';
import DicodingDB from '../../data/dicodingdb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';
import { createReview } from '../../utils/createReview';

let name = '';
let review = '';
let restaurants = {};

const changeName = (e) => {
  name = e.target.value;
};

const changeReview = (e) => {
  review = e.target.value;
};

const Detail = {
  async render() {
    return `
    <div id="likeButtonContainer"></div>
      <div id="restaurant" class="restaurant"></div>
      <div class="inputReview">
          <form id="formReview">
            <input id="inputName" type="text" placeholder="Nama" />
            <input id="inputReview" type="text" placeholder="Review" />
            <button type="submit">Submit</button>
          </form>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const nameInput = document.getElementById('inputName');
    const reviewInput = document.getElementById('inputReview');
    const reviewForm = document.getElementById('formReview');
    const restaurantContainer = document.querySelector('#restaurant');
    const hashValue = window.location.hash;
    const cleanHash = hashValue.replace('#', '');
    const cleanedHash = cleanHash.replace('/detail/', '');

    const onSubmit = async (e) => {
      e.preventDefault();
      await createReview({ cleanedHash, name, review });
      restaurants = await DicodingDB.DetailRestaurant(cleanedHash);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);
    };

    nameInput.addEventListener('change', changeName);
    reviewInput.addEventListener('change', changeReview);
    reviewForm.addEventListener('submit', onSubmit);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    restaurants = await DicodingDB.DetailRestaurant(url.id);
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurants.id,
        name: restaurants.name,
        rating: restaurants.rating,
        city: restaurants.city,
        pictureId: restaurants.pictureId,
      },
    });
  },
};

export default Detail;
