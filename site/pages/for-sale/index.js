import styled from 'styled-components';
import Layout from '../../components/Layout.js';
import ListPage from '../../components/ListPage.js';
import { getForSaleItems } from '../../utils/api.js';


export default function ForSaleIndex(props) {
    const { items } = props;

    return (
        <Layout>
            <ListPage
                items={items}
                page="for-sale"
                title="For Sale"
            />
        </Layout>
    );
}

export async function getStaticProps() {
    return { props: {
        items: getForSaleItems()
    } };
}