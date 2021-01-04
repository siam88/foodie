import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''

            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: ''

            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'street',
                    placeholder: 'Your street'
                },
                value: ''

            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your zipcode'
                },
                value: ''

            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: ''

            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { vlaue: 'fastest', displayValue: 'Fastest' },
                        { vlaue: 'cheapest', displayValue: 'Cheapest' },

                    ]
                },
                value: ''

            }
        },
        loading: false
    }
    OrderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Rafsan",
                address: {
                    street: "410 gawair",
                    zipcode: "1230",
                    country: "Bangladesh    "
                },
                email: "xyz@gmail.com"
            },
            delivaryMethod: "fastest"
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/orders');
            })
            .catch(error => this.setState({ loading: false }));
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form>

                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.key}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.vlaue} />
                ))}
                <Button btnType="Success" clicked={this.OrderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData