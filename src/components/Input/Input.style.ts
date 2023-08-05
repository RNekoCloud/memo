import styled from "styled-components"

export const InputWrapper = styled.div`
    width: 50%;
    margin: 20px auto;
    
`

export const InputContent = styled.input`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #888888;
    padding: 20px;
    outline: none;

    &:focus {
        box-shadow: 5px 5px 8px 0.3px #888888;
    }
`