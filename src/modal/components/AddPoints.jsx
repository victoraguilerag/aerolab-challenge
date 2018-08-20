import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Value from './Value'

export function AddPoints (props) {
  const { handleAddPoints, handleValueSelected, selectedValue } = props
  const values = [ 1000, 5000, 7500 ]

  return (
    <div className="add-points" style={styles.addPoints}>
      <div>
        <div className="add-points-text" style={styles.addPointsText}>
          Select points
        </div>
        <div className="values" style={styles.values}>
          {
            values.map(value => (
              <Value
                key={value}
                active={(value === selectedValue)}
                value={value}
                handleValueSelected={handleValueSelected}
              />
            ))
          }
        </div>
      </div>
      <div className="reedem-buttom" style={styles.reedemButton} onClick={handleAddPoints}>
        <p className="reedem-text" style={styles.reedemText}>
          Add points
        </p>
      </div>
    </div>
  )
}

const styles = {
  'addPoints': {
    'height': '70vh',
    'width': '50%',
    'display': 'flex',
    'flexFlow': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderLeft': 'thin solid lightgray'
  },
  'addPointsText': {
    'fontSize': '24px',
    'color': '#616161',
    'letterSpacing': '-0.15px',
    'lineHeight': '48px',
    'textAlign': 'center',
    'margin': '1em auto'
  },
  'values': {
    'listStyle': 'none',
    'width': '50%',
    'height': '45px',
    'margin': '0 auto',
    'display': 'flex',
    'flexFlow': 'row',
    'justifyContent': 'center',
    'padding': '0'
  },
  'reedemButton': {
    'backgroundImage': 'linear-gradient(-180deg, #0ad4fa 0%, #25bbf1 100%)',
    'width': '228px',
    'height': '42px',
    'margin': '40px auto',
    'borderRadius': '5px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'cursor': 'pointer'
  },
  'reedemText': {
    'fontSize': '18px',
    'color': 'white',
    'letterSpacing': '-0.04px',
    'textAlign': 'center'
  }
}

AddPoints.propTypes = {
  handleAddPoints: PropTypes.func.isRequired,
  selectedValue: PropTypes.number.isRequired,
  handleValueSelected: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedValue: state.selectedValue
  }
}

export default connect(mapStateToProps)(AddPoints)
