'use client';

import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { usePuzzle } from '../PuzzleContext';
import LinkIcon from './LinkIcon';
import "../globals.css";
import PuzzleModal from './PuzzleModal';

const PuzzleCard = () => {
  const { puzzle, noPuzzleToday, error } = usePuzzle();
  const [revealedNames, setRevealedNames] = useState(Array(3).fill(false));
  const [guess, setGuess] = useState('');
  const [remainingGuesses, setRemainingGuesses] = useState(3);
  const [gameStatus, setGameStatus] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  if (error) {
    return (
      <Typography variant="h4" align="center">
          Error: {error}
      </Typography>
    );
  }

  if (noPuzzleToday) {
    return (
      <Typography variant="h4" align="center">
      There is no puzzle today, come back another time!
      </Typography>
    );
  }

  const handleGuess = () => {
    if (guess.trim() === '') {
        return;
    }

    if (remainingGuesses >= 0) {
      setRemainingGuesses(remainingGuesses - 1);
      if (guess.toLowerCase().includes(puzzle.answer.toLowerCase())) {
        setGameStatus('win');
        setTimeout(() => {
            setModalOpen(true);
        }, 900);
      } else if (remainingGuesses === 0) {
        setGameStatus('lose');
        setTimeout(() => {
            setModalOpen(true);
        }, 900);
      } else {
        const updatedRevealedNames = [...revealedNames];
        updatedRevealedNames[remainingGuesses - 1] = true;
        setRevealedNames(updatedRevealedNames);
      }
      setGuess('');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" mb={4}>
        {gameStatus ? (
          puzzle ? (
            `${puzzle.category} ${puzzle.answer}`
          ) : (
            'Loading...'
          )
        ) : (
          puzzle ? (
            `${puzzle.category} ` + '....'
          ) : (
            'Loading...'
          )
        )}
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        {puzzle &&
        puzzle.imageUrls.map((url, index) => [
          <Box key={`image-${index}`} mt={2} mb={2} ml={1.5} mr={1.5}>
            <div className="image-container">
              <img src={url} alt={`Image ${index + 1}`} />
            </div>
            <Typography variant="body1" align="center" color={'#3F3131'} mt={1} fontSize={25}>
              {gameStatus || revealedNames[index] ? puzzle.names[index] : '?'}
            </Typography>
          </Box>,
          index < puzzle.imageUrls.length - 1 && (
          <Box key={`link-${index}`} mb={4}><LinkIcon /></Box>),
        ])}
      </Box>
      <Typography variant="body1" align="center" color={'#3F3131'} gutterBottom> Guesses Remaining: {remainingGuesses + 1} / 4 </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField
          label="try a category"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          variant="outlined"
          sx={{ mr: 1.3, width: 280 }}
          disabled={gameStatus !== null}
        />
        <Button variant="contained"
          sx={{ backgroundColor: '#3F3131', padding: '15.5px 28px', '&:hover': {backgroundColor: '#423939'} }}
          onClick={handleGuess}
          disabled={gameStatus !== null}
        >
          <Typography variant="body2" fontSize={15}>Guess</Typography>
        </Button>
      </Box>
      <PuzzleModal open={modalOpen} onClose={closeModal} gameStatus={gameStatus} />
    </Box>
  );
};

export default PuzzleCard;