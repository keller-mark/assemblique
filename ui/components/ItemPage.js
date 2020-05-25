import { useRouter } from 'next/router';
import styled from 'styled-components';
import dayjs from 'dayjs';

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

export default function ItemPage(props) {
    const { item, htmlPost, title } = props;
    const router = useRouter();

    function onBack() {
        router.back();
    }

    return (
        <>
            <StyledPageTitle>{title}</StyledPageTitle>
            <StyledPageSubtitle onClick={onBack}>&larr;&nbsp;Back</StyledPageSubtitle>
            <StyledPageDate>{dayjs(item.date).format("MMM D, YYYY")}</StyledPageDate>
            <StyledContentDiv
                dangerouslySetInnerHTML={{ __html: htmlPost }}
            />
        </>
    );
}
