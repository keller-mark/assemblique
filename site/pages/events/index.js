import styled from 'styled-components';
import Layout from '../../components/Layout.js';
import ListPage from '../../components/ListPage.js';
import { getEventsItems } from '../../utils/api.js';


export default function EventsIndex(props) {
    const { items } = props;

    return (
        <Layout>
            <ListPage
                items={items}
                page="events"
                title="Events"
            />
        </Layout>
    );
}

export async function getStaticProps() {
    return { props: {
        items: getEventsItems()
    } };
}