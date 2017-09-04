import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import Translator from '../src/lib/translator'
import languages from '../src/lib/languages'
import * as Helpers from '../src/lib/helpers'
import DemoFormComponent from '../src/index'

const debug = require('debug')('demo-form-component:index')
const myPreferredLanguagePrompt = 'My preferred language is'

function SelectLanguage(props) {
	return (
		<select onChange={props.onChange}>
			<option value="en">English</option>
			<option value="he">עִברִית</option>
		</select>
	)
}

class Component extends React.Component {
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
				<DemoFormComponent lang={this.state.lang} />
			</div>
		)
	}
}

(function mountDemo() {
	const el = document.getElementById('form-demo-mountpoint')

	if (el) {
		ReactDOM.render(<Component />, el)
	}
})()
