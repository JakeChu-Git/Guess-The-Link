'use client';

import React from 'react';
import { Container } from '@mui/material';
import PuzzleCard from '../components/PuzzleCard';

export default function Game() {
  return (
    <Container maxWidth="sm">
      <PuzzleCard />
    </Container>
  );
}