// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    initialTimeInMinutes: 25,
    initialTimeInSeconds: 0,
    isRunning: false,
    isDisabled: false,
  }

  getSecondInProperFormate = () => {
    const {initialTimeInSeconds} = this.state
    let seconds
    if (initialTimeInSeconds < 10) {
      seconds = `0${initialTimeInSeconds}`
    } else if (initialTimeInSeconds >= 10) {
      seconds = initialTimeInSeconds
    }
    return seconds
  }

  getMinuteInProperFormate = () => {
    const {initialTimeInMinutes} = this.state
    let minutes
    if (initialTimeInMinutes < 10) {
      minutes = `0${initialTimeInMinutes}`
    } else if (initialTimeInMinutes >= 10) {
      minutes = initialTimeInMinutes
    }
    return minutes
  }

  getTimeInProperFormat = () => {
    const second = this.getSecondInProperFormate()
    const minute = this.getMinuteInProperFormate()

    return (
      <h1 className="heading">
        {minute}:{second}
      </h1>
    )
  }

  onClickDecrementInMinutes = () => {
    this.setState(prevState => ({
      initialTimeInMinutes: prevState.initialTimeInMinutes - 1,
    }))
  }

  onClickIncrementInMinutes = () => {
    this.setState(prevState => ({
      initialTimeInMinutes: prevState.initialTimeInMinutes + 1,
    }))
  }

  onClickStart = () => {
    const {isRunning} = this.state
    console.log(isRunning)
    if (isRunning === true) {
      clearInterval(this.intervalId)
    } else {
      this.intervalId = setInterval(this.startTimer, 1000)
    }
    this.setState(prevState => ({
      isRunning: !prevState.isRunning,
      isDisabled: true,
    }))
  }

  startTimer = () => {
    const {initialTimeInMinutes, initialTimeInSeconds} = this.state
    if (initialTimeInSeconds === 0) {
      this.setState({
        initialTimeInMinutes: initialTimeInMinutes - 1,
        initialTimeInSeconds: 59,
      })
    } else {
      this.setState({initialTimeInSeconds: initialTimeInSeconds - 1})
    }
  }

  onClickReset = () => {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId)
    }

    this.setState({
      isRunning: false,
      initialTimeInMinutes: 25,
      initialTimeInSeconds: 0,
      isDisabled: false,
    })
  }

  render() {
    const {initialTimeInMinutes, isRunning, isDisabled} = this.state

    const startPauseUrl = isRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altStartPauseImage = isRunning ? 'pause icon' : 'play icon'
    const startPauseText = isRunning ? 'Pause' : 'Start'
    const clockStatus = isRunning ? 'Running' : 'Paused'
    return (
      <div className="container">
        <h1>Digital Timer</h1>
        <div className="clock-container">
          <div className="clock-sub-container">
            <div className="circular-shape">
              {this.getTimeInProperFormat()}
              <p>{clockStatus}</p>
            </div>
          </div>
          <div className="right-container">
            <div className="row">
              <img
                onClick={this.onClickStart}
                className="image-icon-style"
                src={startPauseUrl}
                alt={altStartPauseImage}
              />
              <button
                type="button"
                className="button2"
                onClick={this.onClickStart}
              >
                {startPauseText}
              </button>
              <img
                className="image-icon-style"
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                onClick={this.onClickReset}
              />
              <button
                type="button"
                className="button2"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
            <p>Set Timer Limit</p>
            <div className="row">
              <button
                className="button"
                type="button"
                onClick={this.onClickDecrementInMinutes}
                disabled={isDisabled}
              >
                -
              </button>

              <p className="counter">{initialTimeInMinutes}</p>
              <button
                className="button"
                type="button"
                onClick={this.onClickIncrementInMinutes}
                disabled={isDisabled}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
