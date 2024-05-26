'use client';

import React from 'react';
import { Container } from '@mui/material';
import PuzzleCard from './components/PuzzleCard';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <PuzzleCard />
    </Container>
  );
}