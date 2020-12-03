import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'


class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    checkoutCancelled = () => {
        this.props.history.goBack();

    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinued}
                    checkoutCancelled={this.checkoutCancelled}
                />
            </div>
        )
    }
}

export default Checkout