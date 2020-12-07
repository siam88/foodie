import React, { Component } from 'react';
import Order from './Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandle/withErrorHandle'

class Orders extends Component {
    state = {
        orders: [],
        laoding: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({ laoding: false, orders: fetchedOrders })
            })
            .catch(err => {
                this.setState({ laoding: false })
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />

                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios)