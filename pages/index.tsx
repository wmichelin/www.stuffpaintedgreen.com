import Link from 'next/link'
import Layout from '../components/Layout'
import { loadStripe } from '@stripe/stripe-js';


const foo = async () => {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  console.log(stripe);
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
