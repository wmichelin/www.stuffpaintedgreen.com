import Link from 'next/link'
import { Analytics } from '../components/Analytics'
import Layout from '../components/Layout'

const AboutPage = () => (
  <>
    <Analytics />
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  </>
)

export default AboutPage;
