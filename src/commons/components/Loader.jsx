import React from 'react'
import PropTypes from 'prop-types'
import ReactLoader from 'react-loader-spinner'

function Loader (props) {
  const { type } = props
  return (
    <div
      className="loader-container"
      style={styles.loaderContainer}
    >
      <ReactLoader
        type={type}
        color="#FF8800"
        height="50"
        width="100"
      />
    </div>
  )
}

const styles = {
  'app': {
    'position': 'relative',
    'fontFamily': 'Source Sans Pro'
  },
  'loaderContainer': {
    'position': 'fixed',
    'width': '100%',
    'height': '100vh',
    'background': 'white',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'transition': '1s',
    'willChange': 'opacity',
    'zIndex': '200'
  },
  'deactiveLoader': {
    'transition': '1s',
    'opacity': '0'
  }
}

Loader.propTypes = {
  type: PropTypes.string.isRequired
}

export default Loader
