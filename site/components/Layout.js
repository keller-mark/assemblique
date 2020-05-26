import Head from 'next/head';
import Container from './Container.js';
import Header from './Header.js';
import Footer from './Footer.js';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Assemblique</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    );
}