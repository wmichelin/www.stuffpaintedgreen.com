import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
})


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        line_items: [
          {
            quantity: 1,
            price_data: {
              product_data: {
                name: "the product",
                metadata: {
                  "foo": "test this: " + Math.random(),
                },
              },
              currency: "USD",
              tax_behavior: "inclusive",
              unit_amount: 101,
            },
          },
        ],
        mode: 'payment',
        metadata: {
          "foo": "test this: " + Math.random(),
        },
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: {enabled: true},
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};