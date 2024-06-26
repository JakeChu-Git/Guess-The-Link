'use client';

import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { PuzzleProvider } from './PuzzleContext';
import { AppBar, Toolbar, Typography, Box, Container, IconButton, Modal } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { HelpOutline } from '@mui/icons-material';
import Close from '@mui/icons-material/Close';
import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import { useSelectedLayoutSegment } from 'next/navigation';

export default function RootLayout({ children }) {
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const handleHelpModalOpen = () => {
    setHelpModalOpen(true);
  }

  const handleHelpModalClose = () => {
    setHelpModalOpen(false);
  }

  const segment = useSelectedLayoutSegment();
  const isGamePage = segment === 'game';

  return (
    <html lang="en">
      <head>
        <title>Guess The Link</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Guess The Link - A daily puzzle game where players are challenged to guess the common link
          that connects three seemingly unrelated pictures." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isGamePage && (
            <>
              <AppBar position="static" sx={{ backgroundColor: '#fcfaf7', boxShadow: '1', padding: '0.8rem' }}>
                <Toolbar>
                  <Typography variant="h4" component="div" sx={{ '@media (max-width:390px)': { fontSize: '25px' }} } flexGrow={1} fontSize={31}>
                    GUESS THE LINK
                  </Typography>
                  <IconButton onClick={handleHelpModalOpen}>
                    <HelpOutline sx={{ color: '#3F3131', height: '45px', width: '45px' }} />
                  </IconButton>
                </Toolbar>
                <Modal open={helpModalOpen} onClose={handleHelpModalClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '70%',
                      height: '68.5%',
                      maxWidth: 600,
                      overflowY: 'auto',
                      bgcolor: '#ffffff',
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={handleHelpModalClose}><Close /></IconButton>
                    <Typography variant="h4" color={'black'} gutterBottom> How to Play! 🧐 </Typography>
                    <Typography variant="h5" gutterBottom>
                      Try to guess the common link that connects the 3 images on screen.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      + Enter your guess and click the &quot;Guess&quot; button.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      + If your guess is correct, you win! If not, you can try again.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      + You have a total of four guesses. After each incorrect guess, a hint will be revealed.
                    </Typography>
                    <Typography>+ The puzzle gets reset daily, so you can play again tomorrow!</Typography>
                    <Typography variant="body2" mt={1} fontWeight={700} gutterBottom>
                      Note: If your answer contains the answer than that will also be accepted 😄
                    </Typography>
                    <Typography variant="body2" fontWeight={700} gutterBottom> This game is heavily inspired by youtube videos of the same name.</Typography>
                    <Typography variant="h5" mt={1.5} fontWeight={700}> Examples: </Typography>
                    <Typography variant="body1" mt={2} gutterBottom>
                      1. Images: Mouse Trap, House, Garage
                    </Typography>
                    <Typography variant="body2" mt={2} gutterBottom>
                      Answer: Types of Music 🎶
                    </Typography>
                    <Typography variant="body1" mt={2} gutterBottom>
                      2. Images: Calendar date, Jack (Hammer), Dragon
                    </Typography>
                    <Typography variant="body2" mt={2} gutterBottom>
                      Answer: Types of Fruit 🍉
                    </Typography>
                    <Typography variant="body1" mt={2} gutterBottom>
                      3. Images: Mullet (Fish), A Pig&apos;s Tail, Buzz Aldrin
                    </Typography>
                    <Typography variant="body2" mt={2} gutterBottom>
                      Answer: Types of Hair Styles💈
                    </Typography>
                  </Box>
                </Modal>
              </AppBar>
              <Container component="main" sx={{ flexGrow: 1, pt: 4 }}>
                <PuzzleProvider>{children}</PuzzleProvider>
              </Container>
              <Box component="footer" sx={{ m: '2rem 3.5rem', textAlign: 'right' }}>
                <Box>
                  <IconButton backgroundcolor="#828282" aria-label="email" href="mailto:jakelai2004@gmail.com">
                    <EmailIcon />
                  </IconButton>
                  <IconButton backgroundcolor="#828282" aria-label="linkedin" href="https://www.linkedin.com/in/jake-lai-syd/" target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                </Box>
                <Typography variant="body1" color="#828282" mr={1.5}> Created By Jake Lai </Typography>
              </Box>
            </>
          )}
          {!isGamePage && children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}