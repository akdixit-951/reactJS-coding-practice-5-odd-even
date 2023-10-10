import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {counter: 0}

  onIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({counter: prevState.counter + randomNum}))
  }

  render() {
    const {counter} = this.state
    const numTypeText = counter % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Count {counter}</h1>
          <p className="description">{numTypeText}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="message">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
