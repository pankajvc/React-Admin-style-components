import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
const LayoutMain = styled.div`
    display: flex;
    min-height: 100%;
`
const MainLayoutContent = styled.main`
    flex-grow: 1;
    padding-top: 88px;
    padding-bottom: 88px;
    @media(min-width: 1200px) {
        padding: 116px 16px;
        width: calc(100% - 280px);
        transition: margin-left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
`
export default function Layout({ children, toggleTheme, theme }) {

    return (
        <LayoutMain>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <Sidebar />
            <MainLayoutContent>{children}</MainLayoutContent>
        </LayoutMain>
    )
}
