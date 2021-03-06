import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { GetServerSideProps } from 'next';
import { fetchTweets } from '../utils/fetchTweets'

const Home: NextPage = () => {
  return (
    <div className='mx-auto lg:max-w-6xl max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter-2-clone</title>
      </Head>
        <main className='grid grid-cols-9'>

          <Sidebar />

          <Feed />

          <Widgets />

        </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  //const tweets = await fetchTweets();

   return{
     props: {

     }
   }
}
