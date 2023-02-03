import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Listings from '../components/layouts/listings/listings'
import Nav from '../components/layouts/nav/nav'
import prisma from '../prisma/lib/prisma'

type User = {
  name: String
  email: String
}
const Home: NextPage<User> = (props) => {
  return (
    <div>
      <Head>
        <title>NextNewEgg</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='bg-primary'>
        <Nav />
      </header>
      <main>
        <Listings />
      </main>
      <footer></footer>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const user = await prisma.user.findFirst()
//   return {
//     props: { name: user?.name, email: user?.email },
//   }
// }

export default Home
