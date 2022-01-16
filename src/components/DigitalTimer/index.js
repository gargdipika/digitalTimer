// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="container">
        <h1>Digital Timer</h1>
        <div className="clock-container">
          <div className="clock-sub-container">
            <div className="circular-shape">
              <h1 className="heading">time</h1>
              <p>Running</p>
            </div>
          </div>
          <div className="right-container">
            <div className="row">
              <img
                className="image-icon-style"
                src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                alt="play icon"
              />
              <h1>Start</h1>
              <img
                className="image-icon-style"
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
              />
              <h1>Reset</h1>
            </div>
            <p>Set Timer Limit</p>
            <div className="row">
              <h1>-</h1>
              <h1 className="counter">25</h1>
              <h1>+</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
