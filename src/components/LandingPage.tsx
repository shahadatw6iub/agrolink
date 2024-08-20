"use client"
import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './AppAppBar';
import LogoCollection from './LogoCollection';
import Highlights from './Highlights';
import Pricing from './Pricing';
import Features from './Features';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';
import getLPTheme from './ui/getLPTheme';
import HeroText from './HeroText';
import Image from "next/image";

export default function LandingPage() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Box sx={{ bgcolor: 'background.default', position: 'relative', height: '100vh' }}>
                <div className="relative w-full h-full">
                    <Image
                        src="/images/hero.gif"
                        className="object-cover w-full h-full"
                        layout="fill"
                        alt="Hero GIF"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <HeroText />
                    </div>
                </div>
                <Features />
                <Testimonials />
                <Divider />
                <Highlights />
                <Divider />
                <Pricing />
                <Divider />
                <FAQ />
                <Divider />
                <Footer />
            </Box>
        </ThemeProvider>
    );
}
