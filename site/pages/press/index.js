import styled from 'styled-components';
import Layout from '../../components/Layout.js';
import ListPage from '../../components/ListPage.js';
import { getPressItems } from '../../utils/api.js';


export default function PressIndex(props) {
    const { items } = props;

    return (
        <Layout>
            <ListPage
                items={items}
                page="press"
                title="Press"
            />
        </Layout>
    );
}

export async function getStaticProps() {
    return { props: {
        items: getPressItems()
    } };
}