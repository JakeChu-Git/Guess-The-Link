'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const PuzzleContext = createContext();

export const usePuzzle = () => useContext(PuzzleContext);

export const PuzzleProvider = ({ children }) => {
  const [puzzle, setPuzzle] = useState(null);
  const [noPuzzleToday, setNoPuzzleToday] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPuzzle = async () => {
      try {
        const today = new Date().toLocaleDateString('en-CA');
        // Check if today's puzzle has been stored yet
        const storedPuzzle = localStorage.getItem(today);

        if (storedPuzzle) {
          setPuzzle(JSON.parse(storedPuzzle));
          setNoPuzzleToday(false);
          setError(null);
        } else {
          const puzzleRef = doc(db, 'puzzles', today);
          const puzzleSnap = await getDoc(puzzleRef);
          if (puzzleSnap.exists()) {
            const fetchedPuzzle = puzzleSnap.data();
            setPuzzle(fetchedPuzzle);
            setNoPuzzleToday(false);
            setError(null);
            localStorage.setItem(today, JSON.stringify(fetchedPuzzle));
          } else {
            console.warn('No puzzle found for today');
            setNoPuzzleToday(true);
            setError(null);
          }
        }
      } catch (error) {
        console.error('Error fetching puzzle data:', error);
        setError('Failed to fetch puzzle data. Please try again later.');
      }
    };
    fetchPuzzle();
  }, []);

  return (
    <PuzzleContext.Provider value={{ puzzle, noPuzzleToday, error }}>
      {children}
    </PuzzleContext.Provider>
  );
};