import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterProducts} from "../actions";

class FilterProducts extends Component {
    createFilterRadio(value, text) {
        return (
            // Create a `<button>` template which will accept a `value` and `text` from the `createFilterRadio` function
            // The button should call the `filterProducts` `onClick`, passing in the `value` as it's argument.
            // Use the `text` argument as the content for the button element
            // If the current `this.props.filter` value matches the `value` passed as an argument to `createFilterRadio`,
              // apply an class of `'active'`, otherwise provied a default class of `'inactive'`.
            // Don't forget to provide the `<button>` with a `key` attribute.
            <button key={value} className={this.props.filter === value ? 'active' : 'inactive'} onClick={ event => this.props.filterProducts(value) }>{text}</button>
        )
    }
    render() {
        const filterOptions = [
            [
              "all", "Show all"
            ],
            [
              "underTwenty", "Show under $20"
            ],
            [
              "overTwenty", "Show over $20"
            ]
        ]

        return (
            <div className="filterProducts">
                {filterOptions.map(option => this.createFilterRadio.apply(this, option))}
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {filter: state.currentFilter}
}

// Review the `filterProducts` function
// Take note of the parameter accepting a `filter` value from the `<button>` elements above
// and passing said value to the reducer function we named `filterProducts` when we imported it into this file
const mapDispatchToProps = function(dispatch) {
    return {
        filterProducts: function(filter) {
            dispatch(filterProducts(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts);
