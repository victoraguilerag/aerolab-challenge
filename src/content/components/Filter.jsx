import React from 'react'
import PropTypes from 'prop-types'

function Filter (props) {
  const { handleFilterChange, active } = props
  if (active) {
    return (
      <li className="active-filter" style={styles.activeFilter} onClick={handleFilterChange}>
        <p className="active-filter-text" style={styles.activeFilterText}>
          {props.label}
        </p>
      </li>
    )
  }
  return (
    <li className="filter" style={styles.filter} onClick={handleFilterChange}>
      <p className="filter-text" style={styles.filterText}>
        {props.label}
      </p>
    </li>
  )
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
}

const styles = {
  'filter': {
    'userSelect': 'none',
    'background': '#ededed',
    'borderRadius': '100px',
    'width': '163px',
    'height': '48px',
    'margin': '0 5px',
    'marginLeft': '2%',
    'cursor': 'pointer'
  },
  'filterText': {
    'userSelect': 'none',
    'fontSize': '1em',
    'color': '#a3a3a3',
    'height': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'textAlign': 'center',
    'margin': '0',
    'padding': '0 10px'
  },
  'activeFilter': {
    'background': '#0ad4fa',
    'borderRadius': '100px',
    'width': '163px',
    'height': '48px',
    'margin': '0 5px',
    'marginLeft': '2%',
    'cursor': 'pointer'
  },
  'activeFilterText': {
    'userSelect': 'none',
    'color': '#ffffff',
    'fontSize': '1em',
    'height': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'textAlign': 'center',
    'margin': '0',
    'padding': '0 10px'
  }
}

export default Filter
