import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WithValidation from '../lib/with-validation'
import { randomId, sprintf } from '../lib/helpers'

const debug = require('debug')('demo-form-component:on-behalf-of-formfield')

export function Component({ id, label, value, onChange, xl8, } = { id: randomId() }) {
	return (
		<div className="formfield">
			<label htmlFor={id}>{label}</label>
			<br />
			<select
				id={id} name="onBehalfOf"
				value={value}
				onChange={onChange}
			>
				<option value=""></option>
				<option value="self">{xl8('Myself')}</option>
				<option value="relative">{xl8('a relative')}</option>
				<option value="client">{xl8('a client')}</option>
			</select>
		</div>
	)
}

Component.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	xl8: PropTypes.func,
}

Component.defaultProps = {
	onChange: () => {},
	xl8: (format, args=[]) => sprintf(format, ...args),
	id: randomId(),
}

export default connect(
	state => ({ xl8: state.xl8 })
)(WithValidation(Component))
