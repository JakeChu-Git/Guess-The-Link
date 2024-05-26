import React, { useState, useEffect } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PuzzleModal = ({ open, onClose, gameStatus }) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const nextPuzzleTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // Next day
        0, // Hours
        0, // Minutes
        0 // Seconds
      );
      const remainingTime = nextPuzzleTime - now;

      const hours = Math.floor(remainingTime / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setCountdown(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    const timer = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: '#fcfaf7',
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
        }}
      >
        <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          {gameStatus === 'win' ? 'Correct!' : 'Next Time!'}
        </Typography>
        <Typography variant="h6" gutterBottom>
          NEXT PUZZLE IN: {countdown}
        </Typography>
      </Box>
    </Modal>
  );
};

export default PuzzleModal;