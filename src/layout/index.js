import React from 'react'
import styled,{css} from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'
import { device } from "./../config/Theme/BreakPoints";
const LayoutMain = styled.div`
    display: flex;
    min-height: 100%;
    ${props => props.openMenu && css `
    @media ${device.md} {
        position:relative;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            right:0 ;
            bottom: 0;
            z-index:1200
        }
    };
    ` }
    @media ${device.lg} {
        &:before {
            content: inherit;
        }
    }
`
const MainLayoutContent = styled.main`
    flex-grow: 1;
    padding-top: 88px;
    padding-bottom: 88px;
    @media ${device.lg} {
        padding: 116px 16px;
        max-width:100% ;
        padding: 116px 16px;
        width: calc(100% - 280px);
        transition: margin-left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        margin-left: ${props => props.openMenu ? '0' : ''};
    }
`
export default function Layout({ children, toggleTheme, theme }) {
    const [openMenu, setOpenMenu] = React.useState(false)
    const handleSidebarOpen = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <LayoutMain openMenu={openMenu}>
                <Header toggleTheme={toggleTheme} theme={theme} sidebarOpen={handleSidebarOpen} />
                <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                <MainLayoutContent openMenu={openMenu}>
                    {children}
                </MainLayoutContent>
            </LayoutMain>
        </>
    )
}
