import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import classNames from 'classnames';
import {
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Mail as MailIcon,
    Menu as MenuIcon,
    X as XIcon,
} from 'react-feather';
import Container from './Container.js';
import HeaderLink from './HeaderLink.js';
import SearchInput from './SearchInput.js';

const StyledSocialBar = styled("div")`
    width: 100%;
    position: relative;
    height: 50px;
    div.left {
        position: absolute;
        left: 0;
        top: 10px;
    }
    div.right {
        position: absolute;
        right: 0;
        top: 14px;
        a {
            border: 0;
            background-color: transparent;
            margin-left: 30px;
            cursor: pointer;
            opacity: 0.7;
            text-decoration: none;
            display: inline-block;
            @media (max-width: 500px) {
                margin-left: 15px;
            }
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

const StyledMobileMenuButton = styled("button")`
    width: 100%;
    border: 0;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 5px;
    cursor: pointer;
    background-color: transparent;

    @media(min-width: 930px) {
        display: none;
    }

    svg {
        width: 30px;
        height: 30px;
    }
`;

const StyledNav = styled("nav")`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
    margin-top: 20px;

    @media(max-width: 930px) {
        flex-direction: column;
        display: none;
        margin-top: 0px;
        border-top: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
    }
    &.open {
        display: flex;
    }
`;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Container>
            <StyledSocialBar>
                <div className="left">
                    <SearchInput />
                </div>
                <div className="right">
                    <a href="https://www.facebook.com/assemblique"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/assemblique/"><InstagramIcon /></a>
                    <a href="mailto:assemblique@gmail.com"><MailIcon /></a>
                </div>
            </StyledSocialBar>
            <StyledTitle>
                <Link passHref href="/index.html">
                    <a>Assemblique</a>
                </Link>
            </StyledTitle>
            <StyledMobileMenuButton onClick={() => setIsMenuOpen(prev => !prev)}>
                {isMenuOpen ? <XIcon/> : <MenuIcon />}
            </StyledMobileMenuButton>
            <StyledNav className={classNames({ open: isMenuOpen })}>
                <HeaderLink href="/index.html">Home</HeaderLink>
                <HeaderLink href="/about.html">About</HeaderLink>
                <HeaderLink href="/for-sale.html">For Sale</HeaderLink>
                <HeaderLink href="/portfolio.html">Portfolio</HeaderLink>
                <HeaderLink href="/commissions.html">Commissions</HeaderLink>
                <HeaderLink href="/events.html">Events</HeaderLink>
                <HeaderLink href="/press.html">Press</HeaderLink>
                <HeaderLink href="/contact.html">Contact</HeaderLink>
            </StyledNav>
        </Container>
    );
}