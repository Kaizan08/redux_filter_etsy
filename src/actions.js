export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

// export const filterProducts = function (filterType) {
//   return {
//     type: FILTER_PRODUCTS,
//     payload: filterType
//   }
// }

const makeActionCreator = function (actionType) {
  return function (payload) {
    return {
      type: actionType,
      payload: payload
    }
  }
}

export const filterProducts = makeActionCreator(FILTER_PRODUCTS);
