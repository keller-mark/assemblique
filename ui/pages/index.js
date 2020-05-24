import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
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

const StyledRecentsDiv = styled("div")`
    h2 {
        font-family: "Lora", sans-serif;
        font-weight: 400;
        font-size: 20px;
        border-bottom: 1px solid #aaa;
        padding-bottom: 5px;
    }
    .recent-list {
        width: 100%;
        display: flex;
        .recent-item {
            flex-basis: 1;
            a {
                color: #aaa;
                text-decoration: none;
                &:hover {
                    color: #777;
                }
            }
            a div {
                height: 300px;
                width: 95%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
            a p {
                width: 95%;
                text-align: center;
                display: inline-block;
            }
        }
    }
`;

function Recents({ title, page, items }) {
    return (
        <Container>
            <StyledRecentsDiv>
                <h2>{title}</h2>
                <div className="recent-list">
                {items.map(item => (
                    <div key={item.slug} className="recent-item">
                        <a href={`/${page}/${item.slug}`}>
                            <div style={{ backgroundImage: `url(${item.img})`}}></div>
                            <p>{item.title}</p>
                        </a>
                    </div>
                ))}
                </div>
            </StyledRecentsDiv>
        </Container>
    );
}

export default function Home(props) {
    const { recentWorks, recentPress } = props;
    return (
        <>
            <Head>
                <title>Assemblique</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <Main />
            <Recents title="Recent Works" page="portfolio" items={recentWorks} />
            <Recents title="Recent Press" page="press" items={recentPress} />
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    return { props: {
        recentWorks: getRecentWorks(),
        recentPress: getRecentPress()
    } };
}