import { Product, Category } from '.prisma/client'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Listings from '../components/layouts/listings/listings'
import Nav from '../components/layouts/nav/nav'
import prisma from '../prisma/lib/prisma'

export type Products = {
  [category: string]: Product[]
}

type HomeProps = {
  products: Products[]
}

const Home: NextPage<HomeProps> = (props) => {
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
      <main className='pt-10 mt-14 bg-primary-bg'>
        <Listings products={props.products} />
      </main>
      <footer></footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const categories = await prisma.category.findMany()

  let productsArray: Products[] = []
  for (let category of categories) {
    let products = await prisma.product.findMany({
      where: {
        category_id: category.id,
      },
      take: 5,
    })
    productsArray.push({
      [category.name]: products,
    })
  }

  productsArray = JSON.parse(JSON.stringify(productsArray))

  return {
    props: { products: productsArray },
  }
}

export default Home
