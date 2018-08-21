import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import {
  fetchHistory,
  previousHistoryItem,
  nextHistoryItem
} from '../../actions/index.js'
import Product from './HistoryProduct.jsx'
import previusIcon from '../../icons/arrow-left.svg'
import nextIcon from '../../icons/arrow-right.svg'

export class History extends Component {
  componentDidMount () {
    this.props.fetchHistory()
  }

  handlePreviousItem = index => {
    this.props.previousHistoryItem()
  }

  handleNextItem = (index, history) => {
    this.props.nextHistoryItem()
  }

  render () {
    const { history, historyIndex, loadingHistory } = this.props
    const item = (history.size > 0) ? history.get(historyIndex) : null
    const next = (historyIndex < history.size - 1)
    const previous = (historyIndex > 0)
    if (loadingHistory) {
      return (
        <div className="history" style={styles.history}>
          <Loader
            type="TailSpin"
            color="#00bfff"
            height="50"
            width="100"
          />
        </div>
      )
    }
    if (!item) {
      return (
        <div className="history-empty" style={styles.history}>
          No products reedemed
        </div>
      )
    }
    return (
      <div className="history" style={styles.history}>
        <div className="history-label" style={styles.historyLabel}>
          Products redeem
        </div>
        <Product info={item} />
        <div className="controls" style={styles.controls}>
          {
            previous &&
            <img
              src={previusIcon}
              style={styles.control}
              width="46px"
              height="46px"
              className="previus"
              alt="previus"
              onClick={this.handlePreviousItem}
            />
          }
          {
            next &&
            <img
              src={nextIcon}
              style={styles.control}
              width="46px"
              height="46px"
              className="next"
              alt="next"
              onClick={this.handleNextItem}
            />
          }
        </div>
      </div>
    )
  }
}

const styles = {
  'history': {
    'height': '70vh',
    'width': '50%',
    'display': 'flex',
    'flexFlow': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderLeft': 'thin solid lightgray',
    'fontSize': '24px',
    'color': 'rgb(97, 97, 97)',
    'letterSpacing': '-0.15px',
    'lineHeight': '48px',
    'textAlign': 'left',
    'position': 'relative'
  },
  'historyLabel': {
    'position': 'absolute',
    'top': '0'
  },
  'control': {
    'cursor': 'pointer'
  },
  'controls': {
    'width': '100%',
    'display': 'flex',
    'justifyContent': 'space-around',
    'position': 'absolute',
    'bottom': '0'
  }
}

History.propTypes = {
  fetchHistory: PropTypes.func.isRequired,
  previousHistoryItem: PropTypes.func.isRequired,
  nextHistoryItem: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Immutable.List).isRequired,
  historyIndex: PropTypes.number.isRequired,
  loadingHistory: PropTypes.bool.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHistory: () => dispatch(fetchHistory()),
    previousHistoryItem: () => dispatch(previousHistoryItem()),
    nextHistoryItem: () => dispatch(nextHistoryItem())
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.get('modal').get('history'),
    historyIndex: state.get('modal').get('historyIndex'),
    loadingHistory: state.get('modal').get('loadingHistory')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
