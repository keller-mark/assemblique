import Head from 'next/head';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <>
        <Head>
            <title>Assemblique</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />

    </>
  )
}
