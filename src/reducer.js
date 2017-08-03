
import {FILTER_PRODUCTS} from "./actions";
import products from './data/products';
import _ from 'lodash';

// Define initial state object
// Make sure the state object contains the `products` array imported in this file
// The state will also require a property for the current state of filterable data
const initialState = {
    products: products,
    currentFilter: "all"
}

// Finish writing the reducer for the `FILTER_PRODUCTS` action
// Provide the reducer function delration with the necessary parameters
// Give the `state` parameter a default value of `initialState`
const reducer = function(state = initialState, action) {
    switch(action.type) {
        case FILTER_PRODUCTS:
        let newState = _.cloneDeep(state);
        newState.currentFilter = action.payload;
        return newState;
        default:
        return state;
    }
    // When a `FILTER_PRODUCTS` is provided, return a new state
    // Be sure not to mutate state
    // Use the `update` operator provided by `immutability-helper`
    // to update the the state property describing current state of filterable data
    // provided by the `action.payload`
}

export default reducer;
