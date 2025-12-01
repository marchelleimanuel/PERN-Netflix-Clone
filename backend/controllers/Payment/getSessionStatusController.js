import Stripe from "stripe"
const stripe = new Stripe(process.env.SECRET_PAYMENT_GATEWAY_KEY);

export const getSessionStatusController = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

    res.send({
        status: session.status,
        customer_email: session.customer_details.email
    });
}