import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import {
  updateFilter,
  previousPage,
  nextPage
} from '../../actions/index.js'
import ContentOptions from '../components/ContentOptions.jsx'
import ContentFooter from '../components/ContentFooter.jsx'
import ProductsList from '../components/ProductsList.jsx'
import orderProducts from '../../utils/orderProducts.js'

export class Content extends Component {
  handleFilterChange = (e) => {
    this.props.updateFilter(e.target.innerText)
  }

  handleNextPage = (e) => {
    this.props.nextPage()
  }

  handlePreviousPage = (e) => {
    if (this.props.page - 1 > 0) {
      this.props.previousPage()
    }
  }

  render () {
    const {
      coins,
      handleModal,
      products,
      limit,
      filters,
      filter,
      page
    } = this.props
    const prev = (page > 1)
    const next = (products.size > limit * page)
    const pageLength = page * limit
    const pageProducts = orderProducts(products, filter).slice((page - 1) * limit, page * limit)

    return (
      <div className="content">
        <ContentOptions
          pageLength={pageLength}
          productsLength={products.size}
          activeFilter={filter}
          filters={filters}
          handleFilterChange={this.handleFilterChange}
          prev={prev}
          handlePreviousPage={this.handlePreviousPage}
          next={next}
          handleNextPage={this.handleNextPage}
        />
        <ProductsList
          products={pageProducts}
          limit={limit}
          page={page}
          coins={coins}
          handleModal={handleModal}
        />
        <ContentFooter
          pageLength={pageLength}
          productsLength={products.size}
          prev={prev}
          handlePreviousPage={this.handlePreviousPage}
          next={next}
          handleNextPage={this.handleNextPage}
        />
      </div>
    )
  }
}

Content.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  coins: PropTypes.number.isRequired,
  handleModal: PropTypes.func.isRequired,
  products: PropTypes.instanceOf(Immutable.List).isRequired,
  limit: PropTypes.number.isRequired,
  filters: PropTypes.instanceOf(Immutable.List).isRequired,
  filter: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    products: state.get('products').get('products'),
    limit: state.get('products').get('limit'),
    filters: state.get('products').get('filters'),
    filter: state.get('products').get('filter'),
    page: state.get('products').get('page')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: filter => dispatch(updateFilter(filter)),
    previousPage: () => dispatch(previousPage()),
    nextPage: () => dispatch(nextPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
