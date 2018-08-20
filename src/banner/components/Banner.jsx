import React from 'react'
import PropTypes from 'prop-types'
import image from '../../assets/header-x1.png'
import image2x from '../../assets/header-x2.png'

function Banner (props) {
  const { section } = props
  return (
    <div className="Banner" style={styles.banner}>
      <img src={image} srcSet={`${image2x} 2x`} style={styles.image} alt="banner background" />
      <h1 style={styles.section}>{section}</h1>
    </div>
  )
}

Banner.propTypes = {
  section: PropTypes.string.isRequired
}

const styles = {
  'banner': {
    'userSelect': 'none',
    'position': 'relative',
    'marginBottom': '48px'
  },
  'image': {
    'width': '100%'
  },
  'section': {
    'position': 'absolute',
    'bottom': '10.5%',
    'left': '11%',
    'fontSize': '64px',
    'color': '#ffffff',
    'textAlign': 'left'
  }
}

export default Banner
