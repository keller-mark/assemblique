import styled from 'styled-components';
import Layout from '../../components/Layout.js';
import ListPage from '../../components/ListPage.js';
import { getPortfolioItems } from '../../utils/api.js';


export default function PortfolioIndex(props) {
    const { items } = props;

    return (
        <Layout>
            <ListPage
                items={items}
                page="portfolio"
                title="Portfolio"
            />
        </Layout>
    );
}

export async function getStaticProps() {
    return { props: {
        items: getPortfolioItems()
    } };
}