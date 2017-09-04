import React from 'react'
import PropTypes from 'prop-types'

import WithValidation from '../lib/with-validation'
import {randomId, sprintf} from '../lib/helpers'

const debug = require('debug')('demo-form-component:birthyear-formfield')

export function Component({id, label, dispatch, ...restProps} = {id: randomId()}) {
	return (
		<div className="formfield">
			<label htmlFor={id}>{label}</label>
			<br />
			<input type="text" id={id} maxLength="4" {...restProps} />
		</div>
	)
}

Component.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func,
}

Component.defaultProps = {
	name: 'birthyear',
	id: randomId(),
}

export default WithValidation(Component)