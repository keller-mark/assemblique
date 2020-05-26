import { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Link from 'next/link';
import range from 'lodash/range';
import Layout from '../components/Layout.js';
import { getRecentWorks, getRecentPress } from '../utils/api.js';

const Stage = dynamic(() => import('@inlet/react-pixi').then((rp) => rp.Stage), {ssr:false});
const Sprite = dynamic(() => import('@inlet/react-pixi').then((rp) => rp.Sprite), {ssr:false});

const StyledCanvasDiv = styled("div")`
    width: 100%;
    position: relative;

    h2 {
        
        font-family: "Lora", sans-serif;
        font-weight: 400;
        font-size: 36px;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100%;
        text-align: center;

        @media(max-width: 900px) {
            font-size: 22px;
        }
    }

    .canvas-wrapper {
        width: 100%;
        height: 500px;
        position: relative;
        text-align: center;
        canvas {
            margin: 0 auto;
            border: 0px solid black;
        }
    }
`;

function Main() {

    const sprites = range(1, 21).map(i => (
        <Sprite
            key={i}
            image={`/sch_parts/part_${i}.png`}
            x={0}
            y={0}
            width={316}
            height={500}
        />
    ))

    return (
        <StyledCanvasDiv>
            <div className="canvas-wrapper">
                <Stage
                    width={316}
                    height={500}
                    options={{
                        transparent: true,
                        antialias: true,
                        resolution: 1,
                        clearBeforeRender: true
                    }}
                >
                    {sprites}
                </Stage>
            </div>
            <h2>BROKEN OBJECTS FROM THE PAST,<br/> INTRICATELY ASSEMBLED</h2>
        </StyledCanvasDiv>
    );
}

const StyledRecentsDiv = styled("div")`
    position: relative;
    h2 {
        font-family: "Lora", sans-serif;
        font-weight: 400;
        font-size: 20px;
        border-bottom: 1px solid #aaa;
        padding-bottom: 5px;
        position: relative;
    }
    a.view-more {
        color: #333;
        text-decoration: none;
        position: absolute;
        top: 0;
        right: 0;

        &:hover {
            text-decoration: underline;
        }
    }
    .recent-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        @media(max-width: 900px) {
            flex-direction: column;
        }
        .recent-item {
            flex-basis: 1;
            a {
                color: #333;
                text-decoration: none;
                &:hover {
                    color: #000;
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
        <StyledRecentsDiv>
            <h2>{title}</h2>
            <Link passHref href={`/${page}.html`}>
                <a className="view-more">View More</a>
            </Link>
            <div className="recent-list">
            {items.map(item => (
                <div key={item.slug} className="recent-item">
                    <Link passHref href={`/${page}/${item.slug}.html`}>
                        <a>
                            <div style={{ backgroundImage: `url(${item.img})`}}></div>
                            <p>{item.title}</p>
                        </a>
                    </Link>
                </div>
            ))}
            </div>
        </StyledRecentsDiv>
    );
}

export default function Home(props) {
    const { recentWorks, recentPress } = props;
    return (
        <Layout>
            <Main />
            <Recents title="Recent Works" page="portfolio" items={recentWorks} />
            <Recents title="Recent Press" page="press" items={recentPress} />
        </Layout>
    );
}

export async function getStaticProps() {
    return { props: {
        recentWorks: getRecentWorks(),
        recentPress: getRecentPress()
    } };
}