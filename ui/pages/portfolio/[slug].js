import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Layout from '../../components/Layout.js';
import { getPortfolioItems, getPortfolioItemBySlug } from '../../utils/api.js';

const StyledPageTitle = styled("h2")`
    text-align: center;
    font-family: "Lora", sans-serif;
    font-weight: 400;
    font-size: 32px;
`;

const StyledPageSubtitle = styled("button")`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-size: 14px;
`;

const StyledPageDate = styled("span")`
    float: right;
    display: inline-block;
    font-size: 14px;
`;

const StyledContentDiv = styled("div")`
    width: 100%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    img {
        vertical-align: middle;
        width: 70%;
        margin-left: 15%;
        height: auto;
        margin-top: 10px;
        margin-bottom: 30px;
    }
`;

export default function PortfolioItem(props) {
    const { item, htmlPost, title } = props;
    const router = useRouter();

    function onBack() {
        router.back();
    }

    return (
        <Layout>
            <StyledPageTitle>{title}</StyledPageTitle>
            <StyledPageSubtitle onClick={onBack}>&larr;&nbsp;Back</StyledPageSubtitle>
            <StyledPageDate>{dayjs(item.date).format("MMM D, YYYY")}</StyledPageDate>
            <StyledContentDiv
                dangerouslySetInnerHTML={{ __html: htmlPost }}
            />
        </Layout>
    );
}

export async function getStaticProps(ctx) {
    const { params: { slug } } = ctx;
    const [item, htmlPost, title] = await getPortfolioItemBySlug(slug);
    return { props: {
        item,
        htmlPost,
        title,
    } };
}

export async function getStaticPaths() {
    return {
      paths: getPortfolioItems().map(item => ({
          params: { slug: item.slug }
      })),
      fallback: false
    };
}
  