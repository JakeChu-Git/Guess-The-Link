# Guess The Link

Guess The Link is a daily puzzle game (wordle esque) where players try to guess the common link that connects three seemingly unrelated images. Each day, a new puzzle is released, and players have four attempts to guess the correct answer. With each incorrect guess, a hint is revealed to help players narrow down the possibilities. The concept of the game is heavily inspired by youtube videos of the same.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Demo

Check out the live demo of Guess The Link: [https://guess-the-link.vercel.app](https://guess-the-link.vercel.app)

## Features

- Daily puzzle release: A new puzzle is available every day for players to solve.
- Four guesses: Players have four attempts to guess the correct answer.
- Hints: After each incorrect guess, a hint is revealed to assist players.
- Responsive design: The game is responsive for various screen sizes and devices.
- Firebase integration: Puzzles and their answers are stored and retrieved from a Firestore database.
- Local storage: The current day's puzzle is stored in the player's browser local storage to minimize database reads.
- User-friendly interface: The game features a clean and intuitive design for an enjoyable user experience.

## Installation

To run Guess The Link locally, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/guess-the-link.git

2. Navigate to the project directory:
cd guess-the-link

3. Install the dependencies:
npm install

4. Set up Firebase:
- Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
- Enable Firestore database in your Firebase project
- Create a `.env` file in the project root and add your Firebase configuration:
  ```
  NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
  NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
  ```
  Replace the placeholders with your actual Firebase configuration values.

5. Run the development server:
npm run dev

6. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

## Usage

- Access the game by visiting [https://guess-the-link.vercel.app](https://guess-the-link.vercel.app) or running it locally.
- Each day, a new puzzle is released, and players have four attempts to guess the correct answer.
- Enter your guess in the input field and click the "Guess" button to submit your answer.
- If your guess is incorrect, a hint will be revealed to help you narrow down the possibilities.
- Keep guessing until you either find the correct answer or run out of attempts.
- The puzzle resets daily, so you can come back and play again the next day.

## Technologies Used

- Next.js
- React
- Material-UI (MUI)
- Firebase Firestore
- Vercel (for deployment)
