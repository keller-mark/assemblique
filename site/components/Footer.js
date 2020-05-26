import Link from 'next/link';
import styled from 'styled-components';
import Container from './Container.js';

const StyledFooter = styled("div")`
    width: 100%;
    position: relative;
    margin-top: 40px;
    padding-bottom: 40px;
    p {
        width: 100%;
        font-size: 12px;
        text-align: center;
    }
`;

export default function Footer() {
  return (
    <Container>
        <StyledFooter>
            <p>&copy; 2020 Assemblique. All Rights Reserved.</p>
        </StyledFooter>
    </Container>
  )
}