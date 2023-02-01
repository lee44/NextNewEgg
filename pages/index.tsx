import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
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

      <main>
        <p className='text-red-600'>{props.name}</p>
        <p>{props.email}</p>
      </main>

      <footer></footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const user = await prisma.user.findFirst()
  return {
    props: { name: user?.name, email: user?.email },
  }
}

export default Home
