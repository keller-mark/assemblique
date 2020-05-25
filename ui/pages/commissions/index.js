import styled from 'styled-components';
import Layout from '../../components/Layout.js';
import ListPage from '../../components/ListPage.js';
import { getCommissionsItems } from '../../utils/api.js';


export default function CommissionsIndex(props) {
    const { items } = props;

    return (
        <Layout>
            <ListPage
                items={items}
                page="commissions"
                title="Commissions"
            />
        </Layout>
    );
}

export async function getStaticProps() {
    return { props: {
        items: getCommissionsItems()
    } };
}