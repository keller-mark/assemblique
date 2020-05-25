import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import styled from 'styled-components';
import CapacitorIcon from './CapacitorIcon.js';

const StyledA = styled("a")`
    flex-basis: 1;
    display: inline-block;
    color: #333;
    text-decoration: none;
    font-family: "Lora", sans-serif;
    font-weight: 400;
    font-size: 22px;
    position: relative;
    cursor: pointer;

    &:hover {
        color: #4D4628;
    }
    &:hover .capacitor {
        opacity: 0.5;
    }
    &.active .capacitor {
        opacity: 1;
    }

    .title {
        display: inline-block;
        text-align: center;
        width: 100%;
    }
    .capacitor {
        display: inline-block;
        width: 100%;
        position: relative;
        opacity: 0;
        transition: opacity 0.1s;
        svg {
            width: 100px;
            margin: 0 auto;
            display: block;
        }
    }
`;

export default function HeaderLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href || (href !== "/" && router.pathname.startsWith(href));

  return (
    <Link href={href}>
        <StyledA className={classNames({ active: isActive })}>
            <span className="title">{children}</span>
            <span className="capacitor"><CapacitorIcon/></span>
        </StyledA>
    </Link>
  );
}