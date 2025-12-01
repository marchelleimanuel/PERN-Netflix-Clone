import Stripe from "stripe";
import { PLANS } from "./stripeConfig.js";

const stripe = new Stripe(process.env.SECRET_PAYMENT_GATEWAY_KEY);

const CLIENT_DOMAIN = 'http://localhost:5173'

export const createCheckoutSessionController = async (req, res) => {
    const chosenPlan = req.body.type;

    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        line_items: [
            {
                price: PLANS[chosenPlan],
                quantity: 1,
            },
        ],
        mode: 'subscription',
        return_url: `${CLIENT_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
    res.send({clientSecret: session.client_secret});
}
