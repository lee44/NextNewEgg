import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Listings from '../components/layouts/listings/listings'
import Nav from '../components/layouts/nav/nav'

type User = {
  name: String
  email: String
}

const Home: NextPage<User> = (props) => {
  return (
    <div className='h-screen white dark:bg-primary-bg'>
      <Head>
        <title>NextNewEgg</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='top-0 dark:bg-primary bg-white'>
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
