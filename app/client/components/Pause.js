const React = require('react')
const ReactDOM = require('react-dom')

class Pause extends React.Component {
  constructor(props) {
    super(props)
    // this.pauseTimer = this.pauseTimer.bind(this)
  }
  pauseTimer(event) {
    return this.props.pauseTimer(this.props.time)
  }
  render() {
    return <button
      type="button"
      className='btn-default btn'
      onClick={this.pauseTimer}>
      {
        // onClick={()=>{this.props.pauseTimer(this.props.time)}}>
      }
      {this.props.time} seconds
    </button>
  }
}

module.exports = Pause;