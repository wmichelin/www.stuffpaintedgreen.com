import { NextApiRequest, NextApiResponse } from 'next'

/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */

import Stripe from 'stripe';
import { formatAmountForStripe  } from '../../../utils/stripe-utils';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2022-11-15',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
    const amount = 1;
    const CURRENCY = "USD";
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
                product_data: {
                    name: "test donation",
                },
                currency: CURRENCY,
                unit_amount: formatAmountForStripe(amount, CURRENCY),
            }
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      };
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);
      
      res.status(200).json(checkoutSession)
    } catch (err) {
      console.log(err)
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
