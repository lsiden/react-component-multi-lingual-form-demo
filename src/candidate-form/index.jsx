import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BirthyearFormfield from './birthyear-formfield'
import OnBehalfOfFormfield from './on-behalf-of-formfield'
import GenderFormfield from './gender-formfield'
import Styles from '../styles.css'
import { isEmpty, sprintf } from '../lib/helpers'
import * as phrases from '../lib/languages/en-phrases'

const debug = require('debug')('alc-webcomponent:candidate-form')
const maxAllowedBirthYear = new Date().getYear() + 1900 // this year
const minAllowedBirthYear = maxAllowedBirthYear - 120 // 120 years ago max

export class Component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			onBehalfOf: '',
			birthYear: '',
			gender: '',
		}
		this.onChange = this.onChange.bind(this)
		this.birthyearValidator = this.birthyearValidator.bind(this)
		this.requiredValidator = this.requiredValidator.bind(this)
	}

	render() {
		const onBehalfOfLabel = this.props.xl8('I am researching care-facility costs on behalf of')
		const birthYearLabel = this.birthYearLabel()
		const genderLabel = this.genderLabel()
		return (
			<form onSubmit={this.props.onSubmit}>
				<OnBehalfOfFormfield
					name="onBehalfOf"
					value={this.props.onBehalfOf}
					label={onBehalfOfLabel}
					onChange={this.onChange}
					validator={this.requiredValidator}
				/>
				<br />
				{ !!this.state.onBehalfOf &&
					<div>
						<p>{this.promptText()}</p>
						<BirthyearFormfield
							name="birthYear"
							value={this.state.birthYear}
							label={birthYearLabel}
							onChange={this.onChange}
							validator={this.birthyearValidator}
						/>
						<br />
						<GenderFormfield
							name="gender"
							value={this.state.gender}
							label={genderLabel}
							onChange={this.onChange}
							validator={this.requiredValidator}
						/>
					</div>
				}
			</form>
		)
	}

	birthYearLabel() {
		const subject = this.state.onBehalfOf === 'self'
			? this.props.xl8('your birth year')
			: this.props.xl8('this person\'s birth year')
		return `${this.props.xl8('Please type')} ${subject}`
	}

	requiredValidator(val) {
		return isEmpty(val) ? this.props.xl8(phrases.required) : ''
	}

	birthyearValidator(val) {
		const isValid = minAllowedBirthYear <= val && val <= maxAllowedBirthYear
		return isValid ? '' : this.props.xl8(phrases.typeValueBetween, [minAllowedBirthYear, maxAllowedBirthYear])
	}

	onChange(ev) {
		this.setState({
			[ev.target.name]: ev.target.value
		})
	}

	genderLabel() {
		const subject = this.state.onBehalfOf === 'self'
			? this.props.xl8('your gender')
			: this.props.xl8('this person\'s gender')
		return `${this.props.xl8('Please select')} ${subject}`
	}

	promptText() {
		return this.props.xl8(phrases.promptGenderAndBirthyear)
	}
}

Component.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	xl8: PropTypes.func.isRequired,
}

export default connect(
	state => ({ xl8: state.xl8 }),
	dispatch => ({
		onSubmit: ev => {},
	})
)(Component)