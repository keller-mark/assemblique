import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout.js';

const StyledPageTitle = styled("h2")`
    text-align: center;
    font-family: "Lora", sans-serif;
    font-weight: 400;
    font-size: 32px;
`;

const StyledContactDiv = styled("div")`
    
`;

export default function Contact() {
    return (
        <Layout>
            <StyledPageTitle>Contact</StyledPageTitle>
            <StyledContactDiv>
                <p>Send a message via email<br/> or find Assemblique on social media.</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Email:</td>
                            <td><a href="mailto:assemblique@gmail.com">assemblique@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td>Facebook:</td>
                            <td><a href="https://www.facebook.com/assemblique">https://www.facebook.com/assemblique</a></td>
                        </tr>
                        <tr>
                            <td>Instagram:</td>
                            <td><a href="https://www.instagram.com/assemblique/">https://www.instagram.com/assemblique/</a></td>
                        </tr>
                        <tr>
                            <td>Pinterest:</td>
                            <td><a href="http://www.pinterest.com/Assemblique/">http://www.pinterest.com/Assemblique/</a></td>
                        </tr>
                    </tbody>
                </table>

            </StyledContactDiv>
        </Layout>
    );
}