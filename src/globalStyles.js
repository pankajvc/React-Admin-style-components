import { createGlobalStyle } from "styled-components"
import theme from "styled-theming"
const BackgroundColor = theme('mode', {
    light: 'rgba(255, 255, 255)',
    dark: 'rgba(22, 28, 36)'
})
const TextColor = theme('mode', {
    light: 'rgba(0, 0, 0)',
    dark: 'rgba(255, 255, 255)'
})
export const GlobalStyles = createGlobalStyle`
body {
    background: ${BackgroundColor};
    color: ${TextColor};
    transition: all 0.50s linear;
}
`