import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import { Search as SearchIcon } from 'react-feather';

const StyledInputDiv = styled("div")`
    display: inline-block;
    input {
        border: 0px solid #aaa;
        padding: 6px;
        font-size: 16px;
        border-radius: 4px;
    }
    a {
        position: relative;
        color: #aaa;
        text-decoration: none;
        &:hover {
            color: #777;
        }
        svg {
            position: relative;
            top: 5px;
            left: 8px;
        }
    }
`;

export default function SearchInput() {
    const [term, setTerm] = useState('');

    function onChange(event) {
        setTerm(event.target.value);
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            Router.push(`/search?q=${term}`);
        }
    }
    
    return (
        <StyledInputDiv>
            <input type="text" placeholder="Search" value={term} onChange={onChange} onKeyDown={onKeyDown} />
            <Link href={`/search?q=${term}`}>
                <a><SearchIcon /></a>
            </Link>
        </StyledInputDiv>
    );
}