import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WithValidation from '../lib/with-validation'
import {randomId, sprintf} from '../lib/helpers'

export function Component({ id, label, xl8, dispatch, ...restProps }) {
	return (
		<div className="formfield">
			<label htmlFor={id}>{label}</label>
			<br />
			<select id={id} {...restProps}>
				<option value=""></option>
				<option value="m">{xl8('Male')}</option>
				<option value="f">{xl8('Female')}</option>
			</select>
		</div>
	)
}

Component.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string,
	xl8: PropTypes.func,
}

Component.defaultProps = {
	id: randomId(),
	xl8: (format, args=[]) => sprintf(format, ...args),
}

export default connect(
	state => ({ xl8: state.xl8 })
)(WithValidation(Component))
