import React from 'react'
import styled from 'styled-components'

const IconButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    /* background-color: transparent; */
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 50%;
    overflow: visible;
    color: rgb(99, 115, 129);
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 40px;
    height: 40px;
    background-color: rgba(99, 115, 129, 0.08);
    :hover {
    background: rgba(145, 158, 171, 0.08) radial-gradient(circle, transparent 1%, rgba(145, 158, 171, 0.08) 1%) center/15000%;
    };
    :active {
    background-color: rgba(145, 158, 171, 0.08);
    background-size: 100%;
    transition: background 0s;
    };
`

export default function IconNormalButton({ children, onClick, sidebarIcon, isSidebar }) {
    return (
        <IconButton onClick={onClick} sidebarIcon={sidebarIcon} isSidebar={isSidebar} >
            {children}
        </IconButton>
    )
}
