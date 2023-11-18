/* eslint-disable no-unused-expressions */
import FavoriteRestaurantIdb from '../../data/database';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <section class="headline" id="headline">
        <h2>List Restaurant Favorit Anda</h2>
        </section>
  
          <section class="content" id="list">
        
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list');
    restaurants.length < 1 ? restaurantContainer.innerHTML = '<p class="no-favorite">Belum Ada Restaurant Favorite</p>'
      : restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
  },
};

export default Like;
