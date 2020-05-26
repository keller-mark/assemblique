import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Search as SearchIcon } from 'react-feather';
import dayjs from 'dayjs';
import { getIndex } from '../utils/api.js';
import Layout from '../components/Layout.js';

const StyledQueryTerm = styled("h2")`
    position: relative;
    svg {
        position: relative;
        margin-right: 16px;
        top: 4px;
        left: 0px;
    }
`;

const StyledResultList = styled("ul")`
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
    li {
        
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 4px;

        .details {
            margin-top: 5px;
        }
    }
`;

export default function Search(props) {
    const { index } = props;
    const router = useRouter();
    const { query } = router;

    let matches = [];
    if(query.q && query.q.length >= 1) {
        matches = Object.entries(index)
            .flatMap(([page, items]) => 
                items
                    .filter(item => item.title.includes(query.q) || item.slug.includes(query.q))
                    .map(item => ({ ...item, page })
            ))
            .sort((a, b) => b.date.localeCompare(a.date))
    }

    return (
        <Layout>
            <StyledQueryTerm><SearchIcon />{query.q}</StyledQueryTerm>
            <StyledResultList>
                {matches.map(item => (
                    <li key={`${item.page}-${item.slug}`}>
                        <Link passHref href={`/${item.page}/${item.slug}.html`}>
                            <a>{item.title}</a>
                        </Link>
                        <div className="details">
                            <span>{dayjs(item.date).format("MMM D, YYYY")}&nbsp;&middot;&nbsp;{item.page}</span>
                        </div>
                    </li>
                ))}
            </StyledResultList>
        </Layout>
    );
}

export async function getStaticProps() {
    return { props: {
        index: getIndex()
    } };
}