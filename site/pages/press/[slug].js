import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../components/Layout.js';
import ItemPage from '../../components/ItemPage.js';
import { getPressItemBySlug, getPressItems } from '../../utils/api.js';


export default function PressItem(props) {
    const { item, htmlPost, title } = props;

    return (
        <Layout>
            <ItemPage
                item={item}
                htmlPost={htmlPost}
                title={title}
            />
        </Layout>
    );
}

export async function getStaticProps(ctx) {
    const { params: { slug } } = ctx;
    const [item, htmlPost, title] = await getPressItemBySlug(slug);
    return { props: {
        item,
        htmlPost,
        title,
    } };
}

export async function getStaticPaths() {
    return {
      paths: getPressItems().map(item => ({
          params: { slug: item.slug }
      })),
      fallback: false
    };
}
  