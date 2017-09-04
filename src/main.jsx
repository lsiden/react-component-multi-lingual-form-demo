import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CandidateForm from './candidate-form'
import { sprintf } from './lib/helpers'

const debug = require('debug')('demo-form-component:main')

class Component extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		// TODO - main component logic goes here.
		return <CandidateForm />
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.xl8 !== this.props.xl8) {
			this.forceUpdate()
		}
	}
}

Component.propTypes = {
	xl8: PropTypes.func,
}
Component.defaultProps = {
	xl8: (format, args) => sprintf(format, args)
}

export default connect(
	state => ({ xl8: state.xl8 }),
	dispatch => ({
		setLanguage: lang => dispatch(setLanguage(lang)),
	})
)(Component)
