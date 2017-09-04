import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import Translator from '../src/lib/translator'
import languages from '../src/lib/languages'
import * as Helpers from '../src/lib/helpers'
import Alc from '../src/index'

const debug = require('debug')('alc-webcomponent:index')
const myPreferredLanguagePrompt = 'My preferred language is'

function SelectLanguage(props) {
	return (
		<select onChange={props.onChange}>
			<option value="en">English</option>
			<option value="he">עִברִית</option>
		</select>
	)
}

class AlcDemo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lang: 'en'
		}
		this.onChangeLanguage = this.onChangeLanguage.bind(this)
	}

	onChangeLanguage(ev) {
		this.setState({ lang: ev.target.value })
	}

	render() {
		const xl8 = Helpers.mkxl8(this.props.lang)
		return (
			<div>
				<form>
					<label htmlFor="language">{xl8('My preferred language is')}</label>
					<br />
					<SelectLanguage onChange={this.onChangeLanguage} />
				</form>
				<Alc lang={this.state.lang} />
			</div>
		)
	}
}

(function mountAlcTest() {
	const el = document.getElementById('test-alc-mountpoint')

	if (el) {
		ReactDOM.render(<AlcDemo />, el)
	}
})()
