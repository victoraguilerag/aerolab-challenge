import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'
import coin from '../../icons/coin.svg'

export class HistoryProduct extends Component {
  state = {
    loading: true
  }
  showImage = (e) => {
    this.setState({
      loading: false
    })
  }
  render () {
    const {
      name,
      category,
      img,
      cost
    } = this.props.info
    return (
      <div className="product-card" style={styles.productCard} >
        {
          this.state.loading &&
            <div className="loader" style={styles.loader}>
              <Loader
                type="TailSpin"
                color="#00bfff"
                height="50"
                width="100"
              />
            </div>
        }
        <img
          src={img.url}
          srcSet={`${img.hdUrl} 2x`}
          alt={name}
          style={styles.productImage}
          onLoad={(e) => this.showImage(e)}
          onError={() => this.showImage()}
        />
        <div className="productUnavailable" style={styles.productUnavailable}>
          <p className="productUnavailableText" style={styles.productUnavailableText}>{`${cost}`}</p>
          <img
            className="productUnavailableCoin"
            style={styles.productUnavailableCoin}
            width="24px"
            height="24px"
            src={coin}
            alt="coin"
          />
        </div>
        <div className="product-info" style={styles.productInfo}>
          <div className="product-category" style={styles.productCategory}>
            {category}
          </div>
          <div className="product-name" style={styles.productName}>
            {name}
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  'productCard': {
    'background': '#ffffff',
    'boxShadow': '2px 2px 4px 0 rgba(0,0,0,0.10)',
    'width': '276px',
    'height': '276px',
    'position': 'relative',
    'cursor': 'pointer'
  },
  'productImage': {
    'background': '#ffffff',
    'width': '252px',
    'height': '182px',
    'marginTop': '12px',
    'pointerEvents': 'none'
  },
  'productInfo': {
    'position': 'absolute',
    'bottom': '15px',
    'left': '24px',
    'pointerEvents': 'none'
  },
  'productCategory': {
    'fontSize': '16px',
    'color': '#a3a3a3',
    'letterSpacing': '-0.04px',
    'textAlign': 'left',
    'pointerEvents': 'none'
  },
  'productName': {
    'fontSize': '18px',
    'color': '#616161',
    'letterSpacing': '-0.04px',
    'textAlign': 'left',
    'pointerEvents': 'none'
  },
  'productUnavailable': {
    'position': 'absolute',
    'top': '12px',
    'right': '12px',
    'pointerEvents': 'none',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'opacity': '0.8',
    'background': '#616161',
    'borderRadius': '100px',
    'width': '142px',
    'height': '42px'
  },
  'productUnavailableText': {
    'fontSize': '14px',
    'color': '#ffffff',
    'letterSpacing': '-0.03px',
    'textAlign': 'right'
  },
  'productUnavailableCoin': {
    'width': '20px',
    'height': '20px',
    'margin': '0 2.5px'
  }
}

HistoryProduct.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    img: PropTypes.shape({
      url: PropTypes.string.isRequired,
      hdUrl: PropTypes.string.isRequired
    }),
    cost: PropTypes.number.isRequired
  })
}

export default HistoryProduct
