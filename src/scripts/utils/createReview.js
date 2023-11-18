/* eslint-disable import/prefer-default-export */
import alertify from 'alertifyjs';
import CONFIG from '../globals/config';

export const createReview = async ({ cleanedHash, name, review }) => {
  try {
    const response = await fetch(`${CONFIG.BASE_URL}review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: cleanedHash,
        name,
        review,
      }),
    });
    const responseJson = await response.json();
    const { error, message } = await responseJson;
    if (!error) {
      alertify.success(message);
    } else {
      alertify.error(message);
      throw new Error(message);
    }
  } catch (error) {
    console.error(error);
  }

//   restaurants = await DicodingDB.DetailRestaurant(cleanedHash);
//   restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);
};
