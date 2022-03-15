import styled from "styled-components";
import theme from "styled-theming";
const BackgroundColor = theme('mode', {
    light: 'rgba(255, 255, 255,0.8)',
    dark: 'rgba(22, 28, 36)'
});
const TextColor = theme('mode', {
    light: 'rgba(255, 255, 255,1)',
    dark: 'rgba(22, 28, 36)'
})

export const MenuWrapper = styled.div`
    background-color: ${BackgroundColor};
    color: ${TextColor};
    background-image: none;
    position: absolute;
    min-width: 16px;
    min-height: 16px;
    outline: 0px;
    box-shadow: rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) -20px 20px 40px -4px;
    border-radius: 12px;
    padding: 0px;
    width: 360px;
    overflow: inherit;
    margin-top: 12px;
    margin-left: 6px;
    opacity: ${props => props.isOpen ? 1 : 0};
    ${props => props.isOpen && 'right:0;'};
    ${props => props.isOpen ? 'transition: opacity 255ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 170ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' : 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'};
    ${props => props.isOpen && 'transform: none'}
`