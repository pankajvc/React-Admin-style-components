import styled from "styled-components";

export const Item = styled.li`
    box-sizing: border-box;
    list-style: none;
    font-weight: 700;
    line-height: 1.5;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: "Public Sans", sans-serif;
    padding-top: 24px;
    padding-left: 16px;
    padding-bottom: 8px;
    color: rgb(33, 43, 54);
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    opacity: ${props => props.isSidebar ? '0' : '1'};
`