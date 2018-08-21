import React from 'react'
import PropTypes from 'prop-types'
import previusIcon from '../../icons/arrow-left.svg'
import nextIcon from '../../icons/arrow-right.svg'

ContentFooter.propTypes = {
  prev: PropTypes.bool.isRequired,
  next: PropTypes.bool.isRequired,
  handlePreviousPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  pageLength: PropTypes.number.isRequired,
  productsLength: PropTypes.number.isRequired
}

function ContentFooter (props) {
  const {
    prev,
    handlePreviousPage,
    next,
    handleNextPage,
    pageLength,
    productsLength
  } = props
  return (
    <div className="content-footer" style={styles.contentFooter}>
      <p className="products-count-footer" style={styles.productCount}>
        {`${pageLength} of ${productsLength} items`}
      </p>
      <div className="products-controls" style={styles.productsControls}>
        {
          prev &&
          <img src={previusIcon} style={styles.control} width="46px" height="46px" className="previus" alt="previus" onClick={handlePreviousPage} />
        }
        {
          next &&
          <img src={nextIcon} style={styles.control} width="46px" height="46px" className="next" alt="next" onClick={handleNextPage} />
        }
      </div>
    </div>
  )
}

const styles = {
  'contentFooter': {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'margin': '0 auto',
    'height': '70px',
    'maxWidth': '1176px',
    'borderBottom': 'solid 1px #d9d9d9',
    'marginTop': '59px',
    'marginBottom': '100px',
    'position': 'relative'
  },
  'productCount': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '24px',
    'color': '#616161',
    'letterSpacing': '-0.15px',
    'lineHeight': '48px',
    'textAlign': 'left',
    'margin': '0 10px'
  },
  'productsControls': {
    'position': 'absolute',
    'right': '5px'
  },
  'control': {
    'margin': '0 10px',
    'cursor': 'pointer'
  }
}

export default ContentFooter
