import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './animations/animations.css'
import {
  initialLoad,
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
    await this.props.initialLoad()
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
    const points = user.get('points')

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
          points &&
          <Content
            coins={points}
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
            <Modal
              user={user}
              mode={modalMode}
              handleModal={this.handleModal}
              showMessage={showMessage}
            />
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
  initialLoad: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  modal: PropTypes.bool.isRequired,
  modalMode: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  showMessage: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
    modal: state.get('modal').get('modal'),
    modalMode: state.get('modal').get('modalMode'),
    loading: state.get('user').get('loading'),
    showMessage: state.get('message').get('showMessage')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialLoad: () => dispatch(initialLoad()),
    updateModal: mode => dispatch(updateModal(mode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
