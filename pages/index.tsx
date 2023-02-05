import Link from 'next/link'
import Layout from '../components/Layout'
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { formatAmountForStripe  } from '../utils/stripe-utils';


let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};


const foo = async () => {
  getStripe().then((stripe) => console.log(stripe));
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <button type="button" onClick={foo}>submit</button>
  </Layout>
)


export default IndexPage
