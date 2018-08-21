import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'
import affortableIcon from '../../icons/buy-blue.svg'
import affortableSelectedIcon from '../../icons/buy-white.svg'
import coin from '../../icons/coin.svg'

class Product extends Component {
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
      coins,
      selected,
      info,
      handleProductClick,
      handleRedeemProduct,
      handleModal
    } = this.props
    const id = info.get('_id')
    const name = info.get('name')
    const category = info.get('category')
    const url = info.get('img').get('url')
    const hdUrl = info.get('img').get('hdUrl')
    const cost = info.get('cost')

    const affortable = (coins >= cost)
    return (
      <div
        className="product-card"
        style={styles.productCard}
        onClick={
          (affortable)
            ? (e) => handleProductClick(id) : (e) => handleModal('points')
        }
      >
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
        <img src={url} srcSet={`${hdUrl} 2x`} alt={name} style={styles.productImage} onLoad={() => this.showImage()} onError={() => this.showImage()} />
        {
          !affortable &&
          <div className="productUnavailable" style={styles.productUnavailable}>
            <p className="productUnavailableText" style={styles.productUnavailableText}>{`You need ${cost}`}</p>
            <img
              className="productUnavailableCoin"
              style={styles.productUnavailableCoin}
              width="24px"
              height="24px"
              src={coin}
              alt="coin"
            />
          </div>
        }
        {
          !selected && affortable &&
          <img
            src={affortableIcon}
            alt="affortable"
            style={styles.topIcon}
            width="42px"
            height="42px"
          />
        }
        <div className="product-info" style={styles.productInfo}>
          <div className="product-category" style={styles.productCategory}>
            {category}
          </div>
          <div className="product-name" style={styles.productName}>
            {name}
          </div>
        </div>
        {
          selected &&
          <div className="collapsable-buy" style={styles.collapsableBuy}>
            <img
              src={affortableSelectedIcon}
              alt="affortable"
              style={styles.topIcon}
              width="42px"
              height="42px"
            />
            <div className="product-price" style={styles.productPrice}>
              {cost}
              <img
                className="coin"
                style={styles.coin}
                width="24px"
                height="24px"
                src={coin}
                alt="coin"
              />
            </div>
            <div className="reedem-buttom" style={styles.reedemButton} onClick={() => handleRedeemProduct(id)} >
              <p className="reedem-text" style={styles.reedemText}>
                Reedem now
              </p>
            </div>
          </div>
        }
      </div>
    )
  }
}

const styles = {
  'productCard': {
    'userSelect': 'none',
    'background': '#ffffff',
    'boxShadow': '2px 2px 4px 0 rgba(0,0,0,0.10)',
    'width': '276px',
    'height': '276px',
    'position': 'relative',
    'marginTop': '41px',
    'cursor': 'pointer'
  },
  'productImage': {
    'width': '252px',
    'height': '182px',
    'marginTop': '12px',
    'pointerEvents': 'none'
  },
  'topIcon': {
    'position': 'absolute',
    'top': '12px',
    'right': '12px',
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
  'collapsableBuy': {
    'display': 'flex',
    'flexFlow': 'column',
    'alignItems': 'center',
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'width': '100%',
    'height': '100%',
    'opacity': '1',
    'backgroundImage': 'linear-gradient(-180deg, rgba(10, 212, 250, .6) 0%, rgba(37, 187, 241, .7) 100%)'
  },
  'productPrice': {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '36px',
    'color': '#ffffff',
    'letterSpacing': '-0.08px',
    'textAlign': 'center',
    'marginTop': '99px',
    'marginBottom': '12px'
  },
  'coin': {
    'width': '26px',
    'height': '26px',
    'margin': '0 5px'
  },
  'reedemButton': {
    'background': '#ffffff',
    'width': '228px',
    'height': '42px',
    'margin': '0 auto',
    'borderRadius': '100px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'reedemText': {
    'fontSize': '18px',
    'color': '#616161',
    'letterSpacing': '-0.04px',
    'textAlign': 'center'
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
  },
  'loader': {
    'width': '252px',
    'height': '182px',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'marginTop': '12px'
  }
}

Product.propTypes = {
  coins: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  info: PropTypes.shape({}).isRequired,
  handleRedeemProduct: PropTypes.func.isRequired,
  handleProductClick: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired
}

export default Product
