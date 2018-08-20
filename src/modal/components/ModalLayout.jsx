import React from 'react'
import PropTypes from 'prop-types'
import coin from '../../icons/coin.svg'

export function ModalLayout (props) {
  const { handleModal, user: { name, points } } = props
  return (
    <div className="modal" style={styles.modal}>
      <div className="modal-container" style={styles.modalContainer}>
        <div className="user-data" style={styles.userData}>
          <p className="user-name" style={styles.userName}>{name}</p>
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
          <div className="reedem-buttom" style={styles.reedemButton} onClick={() => handleModal('')}>
            <p className="reedem-text" style={styles.reedemText}>
              Return to catalog
            </p>
          </div>
        </div>
        {
          props.children
        }
      </div>
    </div>
  )
}

ModalLayout.propTypes = {
  handleModal: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  children: PropTypes.element.isRequired
}

const styles = {
  'modal': {
    'userSelect': 'none',
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100vw',
    'height': '100vh',
    'background': 'rgba(0,0,0,.5)',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'modalContainer': {
    'width': '93%',
    'minHeight': '80%',
    'background': '#fff',
    'borderRadius': '25px',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center'
  },
  'userData': {
    'height': '80vh',
    'minWidth': '50%',
    'display': 'flex',
    'flexFlow': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'userPoints': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'background': '#ededed',
    'borderRadius': '100px',
    'width': '103px',
    'height': '45px'
  },
  'userName': {
    'fontSize': '24px',
    'color': '#616161',
    'letterSpacing': '-0.15px',
    'lineHeight': '48px',
    'textAlign': 'left'
  },
  'points': {
    'fontSize': '24px',
    'color': '#616161',
    'letterSpacing': '-0.15px',
    'lineHeight': '48px',
    'textAlign': 'left'
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

export default ModalLayout
