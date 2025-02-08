"use client";

import { useState, useEffect, useRef } from "react";
import Button from "../components/timer/button";

const ROUND_TIME = 4 * 60; // 10 seconds for testing, change back to 4 * 60 for 4 minutes
const TOTAL_ROUNDS = 2;

export default function Timer() {
  const [time, setTime] = useState(ROUND_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isRoundCompleted, setIsRoundCompleted] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sound.mp3");
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isRunning && time > 0) {
      timerRef.current = setTimeout(() => setTime(time - 1), 1000);
    } else if (time === 0) {
      handleRoundEnd();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, time]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(ROUND_TIME);
    setIsRoundCompleted(false);
  };

  const handleRoundEnd = () => {
    playSound();
    setIsRunning(false);
    if (currentRound < TOTAL_ROUNDS) {
      setIsRoundCompleted(true);
    } else {
      setIsCompleted(true);
      playSound(); // Play sound twice for final completion
    }
  };

  const startNextRound = () => {
    setCurrentRound(currentRound + 1);
    setTime(ROUND_TIME);
    setIsRoundCompleted(false);
    setIsRunning(true);
  };

  const goToRound = (round: number) => {
    setCurrentRound(round);
    setTime(ROUND_TIME);
    setIsRunning(false);
    setIsCompleted(false);
    setIsRoundCompleted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent relative">
      <div className=" w-full max-w-full">
        <h1 className="text-8xl font-bold text-center mb-16 text-gray-800">
          {currentRound === 1 ? "Pitching" : "Q&A"} Round
        </h1>
        <div
          className="flex justify-center items-center space-x-4 mb-8"
          aria-live="polite"
        >
          <div className="bg-primary p-10 rounded-lg shadow-inner">
            <div className="text-9xl font-bold tabular-nums text-white  ">
              {Math.floor(time / 60)
                .toString()
                .padStart(2, "0")}
            </div>
            <div className="text-2xl text-white text-center mt-1">Minutes</div>
          </div>
          <div className="text-9xl font-bold text-white">:</div>
          <div className="bg-primary p-10 rounded-lg shadow-inner">
            <div className="text-9xl font-bold tabular-nums text-white">
              {(time % 60).toString().padStart(2, "0")}
            </div>
            <div className="text-2xl text-white text-center mt-1">Seconds</div>
          </div>
        </div>
        <div
          className="text-xl text-center mb-6 text-gray-700"
          aria-live="polite"
        ></div>
        <div className="flex justify-center space-x-4">
          {!isRunning && !isCompleted && !isRoundCompleted && (
            <Button
              onClick={handleStart}
              className="w-24 bg-primary"
              disabled={false}
            >
              Start
            </Button>
          )}
          {isRunning && (
            <Button
              onClick={handlePause}
              className="w-24 bg-primary"
              disabled={false}
            >
              Pause
            </Button>
          )}
          {isCompleted && (
            <Button
              onClick={() => goToRound(1)}
              className="w-24 bg-primary"
              disabled={false}
            >
              Pitching Round
            </Button>
          )}
          {isRoundCompleted && (
            <Button
              onClick={startNextRound}
              className="w-36 bg-primary"
              disabled={false}
            >
              Start Next Round
            </Button>
          )}
          <Button
            onClick={handleReset}
            className="w-24 bg-primary"
            disabled={false}
          >
            Reset Round
          </Button>
        </div>
        {isCompleted && (
          <div
            className="mt-16 text-3xl font-bold text-center text-white"
            aria-live="polite"
          >
            Q&A Session Over! You did great!🎉
          </div>
        )}
        {isRoundCompleted && (
          <div
            className="mt-16 text-3xl font-bold text-center text-white"
            aria-live="polite"
          >
            Time's up! Get ready for the Q&A!
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-4 flex space-x-2">
        <Button
          onClick={() => goToRound(1)}
          className={`w-24 ${
            currentRound == 1 ? "bg-pink-400" : "hover:bg-pink-500 bg-primary"
          }`}
          disabled={currentRound == 1}
        >
          Pitching
        </Button>
        <Button
          onClick={() => goToRound(2)}
          className={`w-24 ${
            currentRound == 2 ? "bg-pink-400" : "hover:bg-pink-300 bg-primary"
          }`}
          disabled={currentRound == 2}
        >
          Q&A
        </Button>
      </div>
    </div>
  );
}
