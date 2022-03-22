import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Grid from './components/Grid/Grid';
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
                <Grid container spacing={2}>
                    <Grid item lg={4} md={3} sm={6} xs={12}>
                    <h1>Hello</h1>
                    </Grid>
                    <Grid item lg={4} md={3} sm={6} xs={12}>
                        <h1>Hello</h1>
                    </Grid>
                    <Grid item lg={4} md={3} sm={6} xs={12}>
                        <h1>Hello</h1>
                    </Grid>
                    <Grid item lg={4} md={3} sm={6} xs={12}>
                        <h1>Hello</h1>
                    </Grid>
                </Grid>
            </Layout>
        </ThemeProvider>
    )
}
