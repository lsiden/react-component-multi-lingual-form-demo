import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { sprintf } from './helpers'

const debug = require('debug')('alc-webcomponent:with-validation')

function ErrorMsg({msg}) {
	// debug(msg)
	return <span className="input-error">{msg}</span>
}
ErrorMsg.propTypes = {
	msg: PropTypes.string.isRequired,
}

export default function(FormInput) {

	class Component extends React.Component {
		constructor(props) {
			super(props)
			this.onChange = this.onChange.bind(this)
			this.state = {
				value: props.value,
				errorMsg: props.validator(props.value),
			}
		}

		onChange(ev) {
			if (typeof this.props.onChange === 'function') {
				this.props.onChange(ev)
			}
			this.setState({
				value: ev.target.value,
				errorMsg: this.props.validator(ev.target.value),
			})
		}

		componentWillUpdate() {
			const {validator, value} = this.props

			if (validator(value) !== this.state.errorMsg) {
				this.setState({
					errorMsg: validator(value),
				})
			}
		}

		render() {
			const { onChange, validator, value, ...remProps } = this.props
			const passProps = {
				onChange: this.onChange,
				...remProps,
			}

			if (this.state.errorMsg) {
				passProps.className = 'invalid'
			}
			return (
				<div>
					<FormInput value={this.state.value} {...passProps} />
					{ this.state.errorMsg && <ErrorMsg msg={this.state.errorMsg} /> }
				</div>
			)
		}
	}
	Component.propTypes = {
		validator: PropTypes.func.isRequired,
		value: PropTypes.any,
	}
	Component.defaultProps = {
		value: '',
	}
	return Component
}
