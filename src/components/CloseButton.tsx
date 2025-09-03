type CloseButtonProps = {
  restart: () => void
}

const CloseButton = ({restart} : CloseButtonProps) => {
  return(
    <button
      onClick={restart}
      className="px-6 py-2 rounded-xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white font-bold text-lg shadow-lg
      hover:from-red-500 hover:via-red-600 hover:to-red-700 hover:shadow-red-500/50 transition"
      style={{ cursor: `url(${import.meta.env.BASE_URL}eraser.png) 0 0, auto` }}
    >
      Close
    </button>
  )
}

export default CloseButton

