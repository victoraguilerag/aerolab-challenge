import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../aerolab-logo.svg'
import coin from '../../icons/coin.svg'

function Header (props) {
  const { handleModal } = props
  const { user } = props
  const name = user.get('name')
  const points = user.get('points')
  return (
    <div className="header" style={styles.header}>
      <img
        className="logo"
        style={styles.logo}
        src={logo}
        width="39px"
        height="36px"
        alt="brand logo"
      />
      <div className="user-data" style={styles.userData}>
        <p className="user-name" style={styles.userName} onClick={() => handleModal('history')}>{name}</p>
        <div className="user-points" style={styles.userPoints}>
          <p className="points" style={styles.points}>{points}</p>
          <img
            className="coin"
            style={styles.coin}
            width="24px"
            height="24px"
            src={coin}
            alt="coin"
          />
        </div>
      </div>
    </div>
  )
}

const styles = {
  'header': {
    'display': 'flex',
    'flexFlow': 'row nowrap',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'background': '#ffffff',
    'height': '80px',
    'padding': '0 20px'
  },
  'userData': {
    'minWidth': '220px',
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center'
  },
  'userPoints': {
    'userSelect': 'none',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'background': '#ededed',
    'borderRadius': '100px',
    'width': '103px',
    'height': '48px'
  },
  'userName': {
    'userSelect': 'none',
    'fontSize': '24px',
    'color': '#616161',
    'letterSpacing': '-0.15px',
    'lineHeight': '48px',
    'textAlign': 'left',
    'marginRight': '19px',
    'cursor': 'pointer'
  },
  'points': {
    'userSelect': 'none',
    'fontSize': '24px',
    'color': '#616161',
    'letterSpacing': '-0.15px',
    'lineHeight': '48px',
    'textAlign': 'left',
    'cursor': 'pointer'
  }
}

Header.propTypes = {
  handleModal: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired
}

export default Header
