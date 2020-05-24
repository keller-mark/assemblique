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
            </Head>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    );
}