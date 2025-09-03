type ScoresProps = {
  countX: number
  countO: number
  countDraw: number
  newGame: () => void
}

const Scores = ({ countX, countO, countDraw, newGame }: ScoresProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-4 mb-20 md:mb-0">
      <h2 className="text-2xl font-bold text-white mt-2">Scoreboard</h2>
      <div className="flex space-x-6 bg-pink/30 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
        {/* Player X */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-cyan flex items-center justify-center text-white font-bold text-xl">
            X
          </div>
          <span className="mt-2 text-white font-semibold text-lg">{countX}</span>
        </div>

        {/* Player O */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center text-white font-bold text-xl">
            O
          </div>
          <span className="mt-2 text-white font-semibold text-lg">{countO}</span>
        </div>

        {/* Draws */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-xl">
            🤝
          </div>
          <span className="mt-2 text-white font-semibold text-lg">{countDraw}</span>
        </div>
      </div>

      {(countDraw > 0 || countO > 0 || countX > 0) && (
        <button
          onClick={newGame}
          className="px-6 py-2 rounded-xl  text-white font-bold text-lg shadow-lg 
           transition
            bg-gradient-to-r from-yellow via-cyan-500 to-cyan
          hover:from-yellow-600 hover:via-cyan-600 hover:to-cyan-500"
          style={{ cursor: `url(${import.meta.env.BASE_URL}eraser.png) 0 0, auto` }}
        >
          Reset Game
        </button>
      )}
    </div>
  )
}

export default Scores