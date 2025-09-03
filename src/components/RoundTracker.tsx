type RoundTrackerProps = {
  currentRound: number;
  totalRounds: number;
};

const RoundTracker = ({ currentRound, totalRounds }: RoundTrackerProps) => {
  return (
    <div className="flex flex-col items-center mt-14">
      <h2 className="text-2xl font-bold text-white">Round</h2>
      <div className="flex space-x-2">
        {Array.from({ length: totalRounds }, (_, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-full ${
              i < currentRound ? 'bg-green-400' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
      <span className="text-white mt-2 font-bold text-xl">
        {currentRound} / {totalRounds}
      </span>
    </div>
  );
};

export default RoundTracker;
