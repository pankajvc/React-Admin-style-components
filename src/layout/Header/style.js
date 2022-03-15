import styled from "styled-components"
import theme from "styled-theming"
const BackgroundColor = theme('mode', {
  light: 'rgba(255, 255, 255,0.8)',
  dark: 'rgba(22, 28, 36)'
})
export const HeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  color: #212b36;
  backdrop-filter: blur(6px);
  background-color: ${BackgroundColor};
  box-shadow: none;
  height: 64px;
  z-index: 1101;
  transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms ,0.5s linear;
  @media (min-width: 1200px) {
    height: 92px;
    width: calc(100% - 281px);
  }
`
export const HeaderInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 100%;
  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 1200px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`
export const Spacing = styled.div`
  flex-grow: 1;
`
export const HeaderIconBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const IconBarItems = styled.div`
  display: inline-flexbox;
  transform: none;
  margin: 0px 0px 0px 12px;
  position: relative;
  /* :hover {
    transform: scale(1.09) translateZ(0);
  }; */
  ::first-child {
    margin: 0px 0px 0px 0px;
  }
`
export const UserAvatarBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-family: "Public Sans", sans-serif;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000px;
`
export const ModalBackDrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0px;
  -webkit-tap-highlight-color: transparent;
  background: ${props => props.isOpen ? "transparent" : 'linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgb(22, 28, 36) 100%)'};
  z-index: -1;
  ${props => props.isOpen ? "opacity: 1" : ""}
  ${props => props.isOpen ? "transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" : ""}
`

export const NotificationWrapper = styled.div`
  background-color: rgb(33, 43, 54);
  color: rgb(255, 255, 255);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-image: none;
  position: absolute;
  min-width: 16px;
  min-height: 16px;
  max-width: calc(100% - 32px);
  max-height: calc(100% - 32px);
  outline: 0px;
  box-shadow: rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) -20px 20px 40px -4px;
  border-radius: 12px;
  padding: 0px;
  width: 360px;
  overflow: inherit;
  margin-top: 12px;
  margin-left: 6px;
`
export const NotificationBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
`
export const NotificationText = styled.div`
  flex-grow: 1;
`