import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import '../../stylesheet/responsive-stylesheet.css'
import Filter from './Filter.jsx'
import previusIcon from '../../icons/arrow-left.svg'
import nextIcon from '../../icons/arrow-right.svg'

function ContentOptions (props) {
  const {
    prev,
    next,
    handlePreviousPage,
    handleNextPage,
    pageLength,
    productsLength,
    filters,
    activeFilter,
    handleFilterChange
  } = props
  return (
    <div className="content-options" style={styles.contentOptions}>
      <div className="options" style={styles.options}>
        <div className="products-count-options" style={styles.productsCount}>
          {`${pageLength} of ${productsLength} items`}
        </div>
        <div className="divider" style={styles.divider} />
        <div className="filters" style={styles.filtersContainer}>
          <p className="filters-label" style={styles.filtersLabel}>
            Sort by:
          </p>
          <ul className="filters" style={styles.filters}>
            {
              filters.map(
                filter => <Filter key={filter} active={(filter === activeFilter)} handleFilterChange={handleFilterChange} label={filter} />
              )
            }
          </ul>
        </div>
      </div>
      <div className="controls" style={styles.controls}>
        {
          prev &&
          <img
            className="previus"
            src={previusIcon}
            style={styles.control}
            width="46px"
            height="46px"
            alt="previus"
            onClick={handlePreviousPage}
          />
        }
        {
          next &&
          <img
            className="next"
            src={nextIcon}
            style={styles.control}
            width="46px"
            height="46px"
            alt="next"
            onClick={handleNextPage}
          />
        }
      </div>
    </div>
  )
}

const styles = {
  'contentOptions': {
    'display': 'flex',
    'flexFlow': 'column wrap',
    'justifyContent': 'flex-start',
    'alignItems': 'flex-start',
    'margin': '0 auto',
    'maxWidth': '1176px',
    'height': '70px',
    'borderBottom': 'solid 1px #d9d9d9'
  },
  'options': {
    'display': 'flex'
  },
  'productsCount': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '24px',
    'color': '#616161',
    'letterSpacing': '-0.15px',
    'lineHeight': '48px',
    'textAlign': 'left'
  },
  'divider': {
    'background': '#d9d9d9',
    'width': '1px',
    'height': '49px',
    'margin': '5px',
    'marginLeft': '23px'
  },
  'filtersContainer': {
    'display': 'flex'
  },
  'filtersLabel': {
    'userSelect': 'none',
    'fontSize': '24px',
    'color': '#a3a3a3',
    'letterSpacing': '-0.15px',
    'textAlign': 'left',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'margin': '0',
    'marginLeft': '24px'
  },
  'filters': {
    'listStyle': 'none',
    'display': 'flex',
    'flexFlow': 'row',
    'alignItems': 'center',
    'margin': '0',
    'padding': '0'
  },
  'controls': {
    'alignSelf': 'flex-end',
    'height': '100%',
    'display': 'flex',
    'alignItems': 'flex-start'
  },
  'control': {
    'userSelect': 'none',
    'margin': '0 5px',
    'cursor': 'pointer'
  }
}

ContentOptions.propTypes = {
  prev: PropTypes.bool.isRequired,
  next: PropTypes.bool.isRequired,
  handlePreviousPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  pageLength: PropTypes.number.isRequired,
  productsLength: PropTypes.number.isRequired,
  filters: PropTypes.instanceOf(Immutable.List).isRequired,
  activeFilter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
}

export default ContentOptions
