type Props = {
  currentPlayer: 'X' | 'O'
}

const CurrentPlayerDisplay = ({ currentPlayer }: Props) => {
  return (
    <div className="flex items-center space-x-4 bg-pink/30 backdrop-blur-md px-4 py-2 
        rounded-full shadow-lg">
      <div className={`w-6 h-6 rounded-full ${currentPlayer === 'X' ? 'bg-cyan' : 'bg-yellow'}`}></div>
      <span className="text-white font-bold text-lg">Player {currentPlayer}</span>
    </div> 
  )
}

export default CurrentPlayerDisplay