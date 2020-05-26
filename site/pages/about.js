import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout.js';

const StyledPageTitle = styled("h2")`
    text-align: center;
    font-family: "Lora", sans-serif;
    font-weight: 400;
    font-size: 32px;
`;

const StyledAboutDiv = styled("div")`
    p.word {
        font-size: 22px;
        font-weight: 600;
    }
    p.pronunciation {
        font-size: 20px;
    }
    p.definition {

    }
    p.origin {
        font-style: italic;
    }
`;

export default function About() {
    return (
        <Layout>
            <StyledPageTitle>About</StyledPageTitle>
            <StyledAboutDiv>
                <p className="word">As&bull;sem&bull;blique&trade;</p>
                <p className="pronunciation">[uh-sem-bleek]</p>
                <p className="definition">Intricately Assembling Broken or Discarded Antique and Vintage Objects to Produce Unique and Decorative Works of Art Through Recycling. See also UPCYCLING.</p>
                <p className="origin">Origin: A combination of the words ASSEMBLE and ANTIQUE.</p>


                <p className="word">As&bull;sem&bull;ble</p>
                <p className="pronunciation">[uh-sem-buhl] -bled, -bling.</p>
                <p className="definition">verb (used with object) 1. to bring together or gather into one place, company, body,or whole. 2. to put or fit together; put together the parts of: to assemble information for a report; to assemble a toy from a kit. 3. Computers . compile ( def. 4 ) . verb (used without object) 4. to come together; gather; meet: We assembled in the auditorium. </p>
                <p className="origin">
                    Origin: 1200–50; Middle English &lt; Old French assembler &lt; Vulgar Latin*assimulāre to bring together, equivalent to Latin as- as- + simul together + -ā- thematic vowel + -re infinitive suffix<br/>
                    Synonyms 1. convene, convoke. See gather. 2. connect. See manufacture. 4. congregate, convene
                </p>


                <p className="word">An&bull;tique</p>
                <p className="pronunciation">[an-teek] -tiqued, -ti·quing.</p>
                <p className="definition">adjective 1. of or belonging to the past; not modern. 2. dating from a period long ago: antique furniture. 3. in the tradition, fashion, or style of an earlier period; old-fashioned; antiquated. 4. of or belonging to the ancient Greeks and Romans. noun 6. any work of art, piece of furniture, decorative object, or the like, created or produced in a former period. 7. the antique style, usually Greek or Roman, especially in art. 8. Printing . a style of type. verb (used with object) 9. to make or finish (something, especially furniture) inimitation of antiques. 10. to emboss (an image, design, letters, or the like) on paper or fabric. verb (used without object) 11. to shop for or collect antiques: She spent her vacation antiquing in Boston. </p>
                <p className="origin">Origin: 1520–30; earlier also anticke (&lt; Middle French antique ) &lt; Latinantīiquus, antīicus in front, existing earler, ancient.</p>


            </StyledAboutDiv>
        </Layout>
    );
}