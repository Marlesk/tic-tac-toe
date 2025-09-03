import { Flag } from "lucide-react";
import CloseButton from "./CloseButton";

type DrawModalProps = {
  restart: () => void
  round: number
  nextPlayer: 'X' | 'O'
}

const DrawModal = ({ restart, round, nextPlayer}: DrawModalProps) => {
 
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-pink/30 backdrop-blur-md rounded-2xl p-10 flex flex-col items-center shadow-lg">
          <div className="flex items-center gap-2 mb-2 bg-clip-text text-transparent bg-gradient-to-r  
              from-cyan-400 to-yellow-400">
            <Flag size={24} className="text-cyan-400"/>
            <span className="text-3xl font-bold">Round {round}</span>
          </div>
        <span className="font-bold text-3xl text-cyan-500 animate-pulse flex items-center gap-2">
          Draw! 
        </span>

        <div className="flex items-center gap-2 mt-3 mb-5">
          <span className="text-white/80">Next player</span>
          <span className={`w-8 h-8 rounded-full flex items-center justify-center 
            ${nextPlayer === 'X' ? 'bg-cyan' : 'bg-yellow'} font-bold text-white`}>
            {nextPlayer}
          </span>
        </div>

        <CloseButton restart={restart}/>
      </div>
    </div>
  )
}

export default DrawModal