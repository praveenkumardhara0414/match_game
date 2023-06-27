import './index.css'

const GameOver = props => {
  const {score, resetToStartContent} = props
  const resetToStart = () => {
    resetToStartContent()
  }
  return (
    <div className="display-container-1">
      <div className="game-over">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
        <p className="score-heading">Your Score</p>
        <p className="score-heading-1">{score}</p>
        <button type="button" className="button-click" onClick={resetToStart}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-image"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOver
