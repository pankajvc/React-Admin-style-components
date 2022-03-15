import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalStyles';
import Layout from './layout'

export default function App() {
    const [theme, setTheme] = useState("light");
    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <ThemeProvider theme={{ mode: theme }}>
            <GlobalStyles />
            <Layout theme={theme} toggleTheme={toggleTheme}>
                <h1>Hello, world!</h1>
            </Layout>
        </ThemeProvider>
    )
}
