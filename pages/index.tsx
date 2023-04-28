import type { GetStaticProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Listings from '../components/product/ProductGrid'
import Nav from '../components/common/navbar/navbar'
import prisma from '../prisma/lib/prisma'
import { Products } from '../types/product'

type HomeProps = {
  products: Products[]
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className=''>
      <Head>
        <title>NextNewEgg</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='pt-8'>
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
        categoryId: category.id,
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
