import { Flag } from 'lucide-react';
import CloseButton from './CloseButton';

type WinnerModalProps = {
  winner: 'X' | 'O'
  restart: () => void
  round: number
}

const WinnerModal = ({ winner, restart, round }: WinnerModalProps) => {

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-pink/80 backdrop-blur-md rounded-2xl p-10 flex flex-col items-center shadow-lg">
        <div className="flex items-center gap-2 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-yellow-400">
          <Flag size={24} className="text-cyan-400"/>
          <span className="text-3xl font-bold">Round {round}</span>
        </div>
        <span className={`${winner === 'X' ? 'text-cyan' : 'text-yellow'} font-bold text-3xl 
        animate-pulse flex items-center gap-4 mb-5`}>
          Winner: Player {winner} 
        </span>
        
        <CloseButton restart={restart}/>
      </div>
    </div>
  )
}

export default WinnerModal
