import Link from 'next/link';
import classNames from 'classnames';
import styled from 'styled-components';
import {
    ArrowLeft as ArrowLeftIcon,
    ArrowRight as ArrowRightIcon
} from 'react-feather';

function inWords (num) {
    var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if ((num = num.toString()).length > 9) return 'overflow';
    let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
    return str;
}

const StyledPaginationDiv = styled("div")`
    text-align: center;
    margin-bottom: 50px;

    a {
        font-weight: 400;
        color: #333;
        text-decoration: none;

        &.disabled {
            pointer-events: none;
            opacity: 0.3;
        }
    }

    .pagination-arrow > a {
        font-size: 60px;
    }

    .pagination-current, .pagination-total {
        font-family: 'Libre Baskerville', serif;
    }

    .pagination-current {
        font-size: 60px;
        z-index: 9;
        margin-left: 16px;
    }

    .pagination-total {
        z-index: 11;
        position: relative;
        top: 34px;
        left: 6px;
        display: inline-block;
        width: 50px;
        margin-right: 30px;
    }

    .pagination-line {
        position: absolute;
        margin-top: 40px;
        margin-left: -30px;
        display: inline-block;
        width: 70px;
        height: 50px;
        transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        background-color: #f1efe9;
        border-top: 2px solid gray;
        z-index: 10;
    }
`;

export default function Pagination(props) {
    const { page, currPageNum, totalPages } = props;

    return (
        <StyledPaginationDiv>
            <span className="pagination-arrow">
                <Link passHref href={`/${page}.html?page=${currPageNum-1}`}>
                    <a className={classNames({ disabled: currPageNum === 1 })} disabled={currPageNum <= 1}>
                        <ArrowLeftIcon />
                    </a>
                </Link>
            </span>
            <span className="pagination-current">
                <Link passHref href={`/${page}.html?page=${currPageNum}`}>
                    <a>{currPageNum}</a>
                </Link>
            </span>
            <span className="pagination-line"></span>
            <span className="pagination-total">
                {inWords(totalPages).toUpperCase() + "PAGE" + (totalPages > 1 ? "S" : "")}
            </span>
            <span className="pagination-arrow">
                <Link passHref href={`/${page}.html?page=${currPageNum+1}`}>
                    <a className={classNames({ disabled: currPageNum === totalPages })} disabled={currPageNum >= totalPages}>
                        <ArrowRightIcon />
                    </a>
                </Link>
            </span>
        </StyledPaginationDiv>
    );
}