import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  updateSelectedValue,
  addPoints
} from '../../actions/index.js'
import ModalLayout from '../components/ModalLayout.jsx'
import AddPoints from '../components/AddPoints'
import History from '../components/History.jsx'

export class Modal extends Component {
  handleValueSelected = (value) => {
    this.props.updateSelectedValue(value)
  }
  handleAddPoints = () => {
    const { showMessage } = this.props
    if (!showMessage) {
      this.props.addPoints()
    }
  }
  render () {
    const { handleModal, user, mode } = this.props

    if (mode === 'points') {
      return (
        <ModalLayout user={user} handleModal={handleModal}>
          <AddPoints handleValueSelected={this.handleValueSelected} handleAddPoints={this.handleAddPoints} />
        </ModalLayout>
      )
    }
    return (
      <ModalLayout user={user} handleModal={handleModal}>
        <History />
      </ModalLayout>
    )
  }
}

Modal.propTypes = {
  updateSelectedValue: PropTypes.func.isRequired,
  addPoints: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  mode: PropTypes.string.isRequired,
  showMessage: PropTypes.bool.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedValue: value => dispatch(updateSelectedValue(value)),
    addPoints: () => dispatch(addPoints())
  }
}

export default connect(null, mapDispatchToProps)(Modal)
