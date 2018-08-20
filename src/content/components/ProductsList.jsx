import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  updateSelectedItem,
  redeemProduct
} from '../../actions/index.js'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import '../../animations/animations.css'
import { connect } from 'react-redux'
import Product from './Product'

export class ProductsList extends Component {
  handleProductClick = (id) => {
    if (this.props.selectedItem === id) {
      return this.props.updateSelectedItem('')
    }
    this.props.updateSelectedItem(id)
  }
  handleRedeemProduct = id => {
    this.props.redeemProduct(id)
  }
  render () {
    const {
      products,
      coins,
      handleModal,
      selectedItem
    } = this.props
    const productsComponents = products.map((product, index) => {
      const { _id: id } = product
      const selected = (selectedItem === id)

      return (
        <CSSTransitionGroup
          transitionName="product"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={2}
          style={styles.productList}
          key={id}
        >
          <Product
            info={product}
            selected={selected}
            coins={coins}
            handleProductClick={this.handleProductClick}
            handleRedeemProduct={this.handleRedeemProduct}
            handleModal={handleModal}
          />
        </CSSTransitionGroup>
      )
    })
    return (
      <div className="product-list" style={styles.productList}>
        {
          productsComponents
        }
      </div>
    )
  }
}

const styles = {
  'productList': {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'justifyContent': 'space-around',
    'maxWidth': '1176px',
    'margin': '0 auto'
  }
}

ProductsList.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  updateSelectedItem: PropTypes.func.isRequired,
  redeemProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  coins: PropTypes.number.isRequired,
  handleModal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    selectedItem: state.selectedItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedItem: id => dispatch(updateSelectedItem(id)),
    redeemProduct: id => dispatch(redeemProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
