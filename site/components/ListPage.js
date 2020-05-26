import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Pagination from './Pagination.js';

const StyledPageTitle = styled("h2")`
    text-align: center;
    font-family: "Lora", sans-serif;
    font-weight: 400;
    font-size: 32px;
`;

const StyledMasonry = styled(Masonry)`
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  
    .masonry-grid-column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
    }
    
    .masonry-grid-column > div {
        margin-bottom: 40px;
        a {
            color: #333;
            text-decoration: none;
            text-align: center;
            &:hover {
                text-decoration: underline;
            }
        }
        .image, p {
            width: 80%;
            margin-left: 10%;
            overflow-x: hidden;
            text-overflow: ellipsis;
        }
    }
`;

export default function ListPage(props) {
    const { title, page, items } = props;
    const router = useRouter();
    const { query } = router;
    const currPageNum = parseInt(query.page, 10) || 1;

    const numPerPage = 10;
    const totalPages = Math.ceil(items.length / numPerPage);

    console.assert(1 <= currPageNum && currPageNum <= totalPages);

    const pageItems = items.slice((currPageNum-1)*numPerPage, currPageNum*numPerPage);
    
    const masonryChildren = pageItems.map(item => (
        <div key={item.slug}>
            <Link passHref href={`/${page}/${item.slug}.html`}>
                <a>
                    <img
                        className="image"
                        src={item.img}
                    />
                    <p>{item.title}</p>
                </a>
            </Link>
        </div>
    ))

    return (
        <>
            <StyledPageTitle>{title}</StyledPageTitle>
            <StyledMasonry
                breakpointCols={{
                    default: 2,
                    700: 1,
                }}
                className="masonry-grid"
                columnClassName="masonry-grid-column"
            >
                {masonryChildren}
            </StyledMasonry>
            <Pagination
                page={page}
                currPageNum={currPageNum}
                totalPages={totalPages}
            />
        </>
    );
}

