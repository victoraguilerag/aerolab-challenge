import React from 'react'
import PropTypes from 'prop-types'
import coin from '../../icons/coin.svg'

export function Value (props) {
  const { value, active, handleValueSelected } = props
  if (active) {
    return (
      <div className="active-value" style={styles.activeValue}>
        <div className="active-value-text" style={styles.activeValueText} onClick={(e) => handleValueSelected(value)}>
          {value}
          <img className="coin" style={styles.coin} width="24px" height="24px" src={coin} alt="coin" />
        </div>
      </div>
    )
  }
  return (
    <div className="value" style={styles.value} onClick={() => handleValueSelected(value)}>
      <div className="valueText" style={styles.valueText}>
        {value}
        <img className="coin" style={styles.coin} width="24px" height="24px" src={coin} alt="coin" />
      </div>
    </div>
  )
}

const styles = {
  'value': {
    'background': '#ededed',
    'borderRadius': '100px',
    'height': '40px',
    'margin': '0 10px',
    'cursor': 'pointer'
  },
  'valueText': {
    'fontSize': '1em',
    'color': '#a3a3a3',
    'height': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'textAlign': 'center',
    'margin': '0 10px'
  },
  'activeValue': {
    'background': '#0ad4fa',
    'borderRadius': '100px',
    'height': '40px',
    'margin': '0 5px',
    'cursor': 'pointer'
  },
  'activeValueText': {
    'color': '#ffffff',
    'fontSize': '1em',
    'height': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'textAlign': 'center',
    'margin': '0 10px'
  },
  'coin': {
    'margin': '0 3px'
  }
}

Value.propTypes = {
  value: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  handleValueSelected: PropTypes.func.isRequired
}

export default Value
