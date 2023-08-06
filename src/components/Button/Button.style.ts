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
    transition: opacity 0.25s;

    &:hover {
        opacity: 70%;
    }
`