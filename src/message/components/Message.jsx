import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Message extends Component {
  render () {
    const { message } = this.props
    return (
      <div className="message" style={styles.message}>
        { message }
      </div>
    )
  }
}

const styles = {
  message: {
    'position': 'fixed',
    'width': '250px',
    'height': '50px',
    'right': '25px',
    'bottom': '10px',
    'background': 'white',
    'color': 'rgb(10, 212, 250)',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '50px',
    'boxShadow': '2px 0px 5px rgba(150,150,150,.5)',
    'zIndex': '200'
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(Message)
