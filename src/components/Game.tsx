import { useState } from "react";
import { calculateWinner } from "./winner";
import Scores from "./Scores";
import Board from "./Board";
import RoundTracker from "./RoundTracker";
import WinnerModal from "./WinnerModal";
import DrawModal from "./DrawModal";
import FinalWinner from "./FinalWinner";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X')
  const [board, setBoard] = useState<(null | 'X' | 'O')[]>(Array(9).fill(null))
  const [winner, setWinner] = useState<('X' | 'O' | null)>(null)
  const [winnerLine, setWinnerLine] = useState<number[]>([])
  const [draw, setDraw] = useState(false);
  const [countDraw, setCountDraw] = useState<number>(0)
  const [countX, setCountX] = useState<number>(0)
  const [countO, setCountO] = useState<number>(0)
  const [currentRound, setCurrentRound] = useState<number>(0)
  const totalRounds = 10

  const handlePlayer = (index: number) => {
    if (winner) return

    if (board[index] !== null) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const {winner: win, line} = calculateWinner(newBoard)

    if (win) {
      setWinner(win)
      setWinnerLine(line)
      { win === 'X' ? setCountX(countX + 1) : setCountO(countO + 1)}
      setCurrentRound(currentRound + 1)
      return
    }

    if (!newBoard.includes(null)) {
      setWinner(null)
      setDraw(true)
      setCountDraw(countDraw + 1)
      setCurrentRound(currentRound + 1)
      return
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  const restart = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setDraw(false)
    setCurrentPlayer('X')
    setWinnerLine([])
  }

  const newGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setDraw(false)
    setCurrentPlayer('X')
    setWinnerLine([])
    setCountO(0)
    setCountX(0)
    setCountDraw(0)
    setCurrentRound(0)
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundImage: "url('tic.jpg')" }}
    >
      {currentRound < totalRounds &&
        <>
          <RoundTracker currentRound={currentRound} totalRounds={totalRounds}/>
        
          {winner && <WinnerModal winner={winner} restart={restart} round={currentRound} />}

          {draw && <DrawModal restart={restart} round={currentRound} />}
        
          <div className="flex flex-col md:flex-row md:items-start items-center md:gap-20 mt-5">
            <Board 
              board={board} 
              winnerLine={winnerLine}  
              handlePlayer={handlePlayer}
              winner={winner} 
              draw={draw} 
              currentPlayer={currentPlayer} 
            />
        
            <Scores countX={countX} countO={countO} countDraw={countDraw} newGame={newGame}/>
          </div> 
        </>
      }

      {currentRound == totalRounds && 
        <FinalWinner countX={countX} countO={countO} countDraw={countDraw} newGame={newGame}/>
      }
    </div>




  )
}

export default Game