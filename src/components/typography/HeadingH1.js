import React from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'
const TextColor = theme('mode', {
    light: 'rgba(22, 28, 36)',
    dark: 'rgba(255, 255, 255,1)'
})

const Heading = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    color: ${TextColor};
    text-align: center;
    ${props => console.log(props)}
`

export default function HeadingH1({ children }) {
    return (
        <Heading>{children}</Heading>
    )
}
