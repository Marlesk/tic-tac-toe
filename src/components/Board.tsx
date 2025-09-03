import CurrentPlayerDisplay from "./CurrentPlayerDisplay"
import type { Cell } from "./winner"

type BoardProps = {
  board: Cell[]
  winnerLine: number[] 
  handlePlayer: (index: number) => void
  winner: 'X' | 'O' | null
  draw: boolean
  currentPlayer: 'X' | 'O' 
}

const Board = ({ board, winnerLine, handlePlayer, winner, draw, currentPlayer }: BoardProps) => {
  return (
     <div className="flex flex-col items-center space-y-4 mb-10 md:mb-0">
        
        <CurrentPlayerDisplay currentPlayer={currentPlayer}/>
       
        <div className="grid grid-cols-3 md:gap-4 gap-2 w-60 h-60 md:w-80 md:h-80 p-4 bg-pink/65 rounded-2xl shadow-lg"
          style={{cursor: `url(${import.meta.env.BASE_URL}pencil.png) 0 0, auto` }}>
          {board.map((cell, index) => (
            <div
              key={index}
              className={`md:w-20 md:h-20 w-15 h-15 flex items-center justify-center bg-blue rounded-lg shadow-md md:text-3xl text-2xl font-bold hover:bg-dark-pink transition
              ${cell === 'X' ? 'text-cyan' : 'text-yellow'}
              ${winnerLine.includes(index) ? 'bg-green-300 animate-pulse' : 'bg-blue hover:bg-dark-pink'}
              ${(winner || draw) ? 'pointer-events-none' : 'hover:bg-dark-pink'}`
              
              }
              
              onClick={() => handlePlayer(index)}
            >
              {cell}
            </div>
          ))}
        </div>

      </div>
   
  )
}

export default Board