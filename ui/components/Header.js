import Link from 'next/link';
import styled from 'styled-components';
import {
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Mail as MailIcon
} from 'react-feather';
import Container from './Container.js';
import HeaderLink from './HeaderLink.js';

const StyledSocialBar = styled("div")`
    width: 100%;
    position: relative;
    height: 50px;
    div {
        position: absolute;
        right: 0;
        top: 10px;
        a {
            border: 0;
            background-color: transparent;
            margin-left: 30px;
            cursor: pointer;
            opacity: 0.7;
            text-decoration: none;
            display: inline-block;
            &:hover {
                opacity: 1;
            }
            svg {
                width: 30px;
                stroke: #333;
            }
        }
    }
`;

const StyledTitle = styled("div")`
    width: 100%;
    a {
        width: 100%;
        display: inline-block;
        text-align: center;
        font-family: "Amatic SC", sans-serif;
        font-size: 64px;
        font-weight: 700;
        color: #333;
        text-decoration: none;
    }
`;

const StyledNav = styled("nav")`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
    margin-top: 20px;
    //border-top: 3px double #aaa;
`;

export default function Header() {
  return (
    <Container>
        <StyledSocialBar>
            <div>
                <a href="https://www.facebook.com/assemblique"><FacebookIcon /></a>
                <a href="https://www.instagram.com/assemblique/"><InstagramIcon /></a>
                <a href="mailto:assemblique@gmail.com"><MailIcon /></a>
            </div>
        </StyledSocialBar>
        <StyledTitle>
            <Link href="/">
                <a>Assemblique</a>
            </Link>
        </StyledTitle>

        <StyledNav>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/for-sale">For Sale</HeaderLink>
            <HeaderLink href="/portfolio">Portfolio</HeaderLink>
            <HeaderLink href="/commissions">Commissions</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>
            <HeaderLink href="/contact">Contact</HeaderLink>
            <HeaderLink href="/events">Events</HeaderLink>
            <HeaderLink href="/press">Press</HeaderLink>
        </StyledNav>
    </Container>
  )
}