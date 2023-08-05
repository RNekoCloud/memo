import styled from "styled-components"

export const StyledButton = styled.button`
    display: block;
    padding: 10px 30px;
    outline: none;
    border: none;
    margin: 0 25px;
    background-color: #35155D;
    color: #fff;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition-timing-function: ease-in-out;
    transition-property: all;
    transition-duration: 0.100s;
    transition-delay: 0.100s;

    &:hover {
        opacity: 70%;
    }
`