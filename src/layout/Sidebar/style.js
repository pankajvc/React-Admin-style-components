import styled from "styled-components"
import theme from "styled-theming"

const BackgroundColor = theme('mode', {
  light: 'rgba(255, 255, 255,0.8)',
  dark: 'rgba(22, 28, 36)'
})
export const SidebarWrapper = styled.div`
   @media (min-width: 1200px) {
    flex-shrink: 0;
    transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 280px;
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
  top: 0px;
  outline: 0px;
  left: 0px;
  border-right: 1px dashed rgba(145, 158, 171, 0.24);
  width: 280px;
  background-color: ${BackgroundColor};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,0.50s linear;
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
  color: rgb(0, 171, 85);
  border-radius: 8px;
  background-color: rgba(0, 171, 85, 0.08);
  :hover {
    background: rgba(145, 158, 171, 0.08) radial-gradient(circle, transparent 1%, rgba(145, 158, 171, 0.08) 1%) center/15000%;
  };
  :active {
    background-color: rgba(145, 158, 171, 0.08);
  background-size: 100%;
  transition: background 0s;
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
`
export const ItemsText = styled.div`
  flex: 1 1 auto;
  min-width: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  white-space: nowrap;
  transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`