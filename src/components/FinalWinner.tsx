import Confetti from 'react-confetti';
import { PartyPopper, Star } from "lucide-react";
import { useWindowSize } from 'react-use';

type Props = {
  countX: number
  countO: number
  countDraw: number
  newGame: () => void
}

const FinalWinner = ({ countX, countO, countDraw, newGame }: Props) => {
  const { width, height } = useWindowSize()

  const isDraw = countDraw > countO && countDraw > countX
  const winner = countX > countO ? 'X' : countO > countX ? 'O' : null

  return (
      <div className="flex fixed inset-0 z-50 justify-center flex-col items-center">
        {winner && !isDraw &&
          <>
            <Confetti width={width} height={height} />
              <span className="text-4xl font-extrabold flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 animate-pulse">
                <PartyPopper size={36} className="text-yellow-400" />
                Winner: Player {winner}
                <PartyPopper size={36} className="text-yellow-400" />
              </span>

              <span className="mt-4 text-xl text-white/90 font-semibold">
                Congratulations! 
              </span>
          </>  
        }

        {isDraw &&
          <>
            <span className="text-4xl font-extrabold flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 animate-pulse">
              <Star size={36} className="text-yellow-400" />
              Draw!
              <Star size={36} className="text-yellow-400" />
            </span>
          </>  
        }
        <button
          onClick={newGame}
          className="mt-6 px-8 py-3 rounded-2xl  text-white font-bold text-lg shadow-lg
          transition cursor-pointer bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500
          hover:from-yellow-500 hover:via-pink-600 hover:to-cyan-600"
        >
          Play Again
        </button>
      </div>
    

  )
}

export default FinalWinner