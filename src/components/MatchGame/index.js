import './index.css'

import {Component} from 'react'

import TabItem from '../TabItem'

import ImageItem from '../ImageItem'

import GameOver from '../GameOver'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'FRUIT',
      image: props.imagesList[0],
      score: 0,
      timer: 60,
      isMatched: true,
    }
  }

  componentDidMount = () => {
    const {isMatched} = this.state
    this.timerId = ''
    if (isMatched === true) {
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prevState => ({timer: prevState.timer - 1}))
  }

  resetToStartContent = () => {
    const {imagesList} = this.props
    this.setState({
      tab: 'FRUIT',
      image: imagesList[0],
      score: 0,
      timer: 60,
      isMatched: true,
    })
  }

  changeTab = tabId => {
    this.setState({tab: tabId})
  }

  clickImageButton = id => {
    const {image} = this.state
    const {imagesList} = this.props
    const number = Math.floor(Math.random() * imagesList.length)

    if (image.id === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        image: imagesList[number],
      }))
    }

    if (image.id !== id) {
      this.setState({isMatched: false})
    }
    if (image.id !== id) {
      clearInterval(this.timerId)
    }
  }

  getDetails = () => {
    const {tabsList, imagesList} = this.props
    const {image, tab, isMatched, score, timer} = this.state
    const primaryList = imagesList.filter(eachItem => eachItem.category === tab)
    const image1 = image.imageUrl
    if (isMatched === false) {
      return (
        <GameOver
          score={score}
          resetToStartContent={this.resetToStartContent}
        />
      )
    }
    if (timer === 0) {
      clearInterval(this.timerId)
    }
    if (timer === 0) {
      return (
        <GameOver
          score={score}
          resetToStartContent={this.resetToStartContent}
        />
      )
    }
    return (
      <div className="display-container">
        <img src={image1} alt="match" className="image-2" />
        <ul className="ul-container">
          {tabsList.map(eachItem => (
            <TabItem
              key={eachItem.tabId}
              details={eachItem}
              changeTab={this.changeTab}
              isActive={eachItem.tabId === tab}
            />
          ))}
        </ul>
        <ul className="images-container">
          {primaryList.map(eachItem => (
            <ImageItem
              key={eachItem.id}
              details={eachItem}
              clickImageButton={this.clickImageButton}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {score, timer} = this.state

    return (
      <div className="bg-container">
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="image"
          />
          <ul className="container">
            <li className="score-container">
              <p className="score-heading">
                Score: <span className="score-para">{score}</span>
              </p>
            </li>
            <li className="score-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="image-1"
              />
              <p className="score-para">{timer} sec</p>
            </li>
          </ul>
        </nav>
        {this.getDetails()}
      </div>
    )
  }
}

export default MatchGame
