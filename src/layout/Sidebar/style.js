import styled, { css } from "styled-components"
import theme from "styled-theming"
import { device } from "./../../config/Theme/BreakPoints";

const BackgroundColor = theme('mode', {
  light: 'rgba(255, 255, 255,0.8)',
  dark: 'rgba(22, 28, 36)'
})
export const SidebarWrapper = styled.div`
  @media ${device.lg} {
    flex-shrink: 0;
    transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width:${props => props.isSidebar ? '80px' : '280px'};
  }
`
export const SidebarContent = styled.div`
  flex: 0 0 auto;
`
export const SidebarMain = styled.div`
 color: rgb(33, 43, 54);
  box-shadow: none;
  background-image: none;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
  z-index: 1200;
  position: fixed;
  top: 92px;
  outline: 0px;
  left: 0px;
  border-right: 1px dashed rgba(145, 158, 171, 0.24);
  width:${props => props.isSidebar ? '80px' : '280px'};
  background-color: ${BackgroundColor};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,0.50s linear;
  transition:${props => props.isSidebar ? 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms' : 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,0.50s linear'};
  & .mobileIcon {
    display: none;
  }
${props => props.isSidebar ? css`
  @media ${device.xs} {
      position:absolute ;
      top:0 ;
      width:${props => props.isSidebar && '280px'};
      background-color: #ffffff;
      & .mobileIcon {
      display: block;
      }
    }
  `: css`@media ${device.xs} {
      position:absolute ;
      top:0 ;
      width: 0;
      border-right:0
  }`}
  ${props => props.isSidebar ? css`
  @media ${device.lg} {
    position: fixed;
    top: 92px;
    width: 80px;
     & .mobileIcon {
      display: none;
      }
  }
  `: css`@media ${device.lg} {
    width: 280px;
    position: fixed;
    top: 92px;
  }`}
`
export const SidebarMainInner = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
`
export const SidebarInnerContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px 16px;
  flex-shrink: 0;
`
export const SidebarHeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const HeaderBrandLogo = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`
export const SidebarIconBar = styled.div`
  display: inline-flex;
  transform: none;
  `

export const ItemsInnerBox = styled.div`
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px 0px 4px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
  text-align: left;
  padding: 8px 12px 8px 16px;
  background-position: center;
  transition: background 0.8s;
  line-height: 1.57143;
  font-size: 0.875rem;
  font-family: "Public Sans", sans-serif;
  font-weight: 600;
  position: relative;
  overflow: hidden ;
  height: 48px;
  text-transform: capitalize;
  color: ${props => props.openMenu ? 'rgb(99, 115, 129)' : 'rgb(0, 171, 85)'};
  border-radius: 8px;
  background-color: ${props => props.openMenu ? 'transparent' : 'rgba(0, 171, 85, 0.08)'};
  :hover {
    background: rgba(145, 158, 171, 0.08) radial-gradient(circle, transparent 1%, rgba(145, 158, 171, 0.08) 1%) center/15000%;
  };
  :active {
    background-color: rgba(145, 158, 171, 0.08);
  background-size: 100%;
  transition: background 0s;
  };
  & svg {
    transform:${props => props.openMenu ? 'rotate(90deg)' : 'rotate(0deg)'};
  }
`
export const ItemsInnerBoxIcon = styled.div`
  flex-shrink: 0;
  color: inherit;
  min-width: auto;
  margin-right: 16px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    transform:rotate(0deg);
  }
`
export const ItemsText = styled.div`
  flex: 1 1 auto;
  min-width: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  white-space: nowrap;
  transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`
export const OpenSubMenu = styled.div`
    overflow: ${props => props.openMenu ? 'visible' : 'hidden'};
    height: ${props => props.openMenu ? 'auto' : '0px'};
    min-height: ${props => props.openMenu ? '0px' : 'auto'};
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${props => props.openMenu ? 'transition-duration: 302ms' : ''}
`
export const InnerMenuItemsList = styled.div`
    display: flex;
    width: 100%;
`
export const InnerMenuItems = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
    position: relative;
    width:100% ;
`
export const InnerMenuIcon = styled.div`
    flex-shrink: 0;
    color: inherit;
    min-width: auto;
    margin-right: 16px;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InnerIconDot = styled.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgb(145, 158, 171);
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`
export const InnerMenuText = styled.div`
    flex: 1 1 auto;
    min-width: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
`