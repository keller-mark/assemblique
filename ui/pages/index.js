import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Container from '../components/Container.js';
import { getRecentWorks, getRecentPress } from '../utils/api.js';

const StyledMainDiv = styled("div")`
    width: 100%;
    height: 500px;
`;

function Main() {
    return (
        <Container>
            <StyledMainDiv />
        </Container>
    );
}

const StyledRecentDiv = styled("div")`
    h2 {
        font-family: "Lora", sans-serif;
        font-weight: 400;
        font-size: 20px;
        border-bottom: 1px solid #aaa;
        padding-bottom: 5px;
    }
`;

function RecentWorks() {
    return (
        <Container>
            <StyledRecentDiv>
                <h2>Recent Works</h2>
            </StyledRecentDiv>
        </Container>
    );
}

function RecentPress() {
    return (
        <Container>
            <StyledRecentDiv>
                <h2>Recent Press</h2>
            </StyledRecentDiv>
        </Container>
    );
}

export default function Home(props) {
    console.log(props);
    return (
        <>
            <Head>
                <title>Assemblique</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <Main />
            <RecentWorks />
            <RecentPress />
        </>
    );
}

export async function getStaticProps() {
    return { props: {
        recentWorks: getRecentWorks(),
        recentPress: getRecentPress()
    } };
}