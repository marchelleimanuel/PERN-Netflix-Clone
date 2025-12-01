// CheckoutForm.js
import { useCallback, useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { BASE_URL } from "../../common/urlPath";
import { useLocation } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test publishable API key.
const stripe = loadStripe('pk_test_51SOCSnLdgZFNuCzXxoZyDomLemiPZbfHsBlNPPbAIAzrpiuNdeUkGGLzRmRnfSDJVHMwCED1IY7c3CVLbwzGDjqD00Du4Gdl7f')
const CheckoutForm = () => {
    const location = useLocation();
    // console.log(location);
    const selectedPlan  = location.state.selectedPlan || [];
    console.log('ini dari checkout', selectedPlan);

    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch(`${BASE_URL}/create-checkout-session`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedPlan)
        })
        .then((res) => res.json())
        .then((data) => data.clientSecret)
        .catch((error) => console.log('ini erronya', error));
    }, []);

    const options = {fetchClientSecret};

    return (
        <div id='checkout'>
            <EmbeddedCheckoutProvider
                stripe={stripe}
                options={options}
            >
                <EmbeddedCheckout/>
            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default CheckoutForm;