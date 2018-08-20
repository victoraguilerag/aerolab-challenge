import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './animations/animations.css'
import {
  fetchUser,
  updateModal
} from './actions/index'
import './App.css'
import Header from './header/components/Header.jsx'
import Banner from './banner/components/Banner.jsx'
import Content from './content/containers/Content.jsx'
import Modal from './modal/containers/Modal.jsx'
import Message from './message/components/Message.jsx'
import HomeLoader from './commons/components/Loader.jsx'

class App extends Component {
  async componentDidMount () {
    this.props.fetchUser()
  }

  handleModal = mode => {
    this.props.updateModal(mode)
  }

  render () {
    const {
      user,
      modal,
      modalMode,
      loading,
      showMessage
    } = this.props
    console.log(showMessage)
    return (
      <div className="App" style={styles.app}>
        <CSSTransitionGroup
          transitionName="loader"
          transitionEnterTimeout={4000}
          transitionLeaveTimeout={600}
        >
          {
            loading &&
            <HomeLoader type="Puff" />
          }
        </CSSTransitionGroup>
        <Header handleModal={this.handleModal} user={user} />
        <Banner section="Electronics" />
        {
          user.points &&
          <Content
            coins={user.points}
            handleModal={this.handleModal}
          />
        }
        <CSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {
            modal &&
            <Modal user={user} mode={modalMode} handleModal={this.handleModal} />
          }
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="message"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}
        >
          {
            showMessage &&
            <Message />
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

const styles = {
  'app': {
    'position': 'relative',
    'fontFamily': 'Source Sans Pro'
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  modal: PropTypes.bool.isRequired,
  modalMode: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  showMessage: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    modal: state.modal,
    modalMode: state.modalMode,
    loading: state.loading,
    showMessage: state.showMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    updateModal: mode => dispatch(updateModal(mode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
