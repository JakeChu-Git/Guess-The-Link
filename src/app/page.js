'use client';

import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  const handlePlayClick = () => {
    router.push('/game');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#fcfaf7',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <Typography variant="h4" sx={{ '@media (max-width:600px)': { fontSize: '38px' }}} fontSize={'48px'} mb={1.3}>
        GUESS THE LINK
      </Typography>
      <Typography variant="body2" mb={3} color={"#828282"}>
        A daily game about finding the common link.
      </Typography>
      <Button
        variant="contained"
        onClick={handlePlayClick}
        sx={{ backgroundColor: '#3F3131', padding: '12px 43px', '&:hover': {backgroundColor: '#423939'} }}
      >
        <Typography variant="body2" fontSize={16}>Play</Typography>
      </Button>
    </Box>
  );
};

export default LandingPage;