// Provide Alc with React store.

import React from 'react';
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { mkxl8 } from './lib/helpers'
import Alc from './alc'

const debug = require('debug')('alc-webcomponent:alc')
const SET_XL8R = 'set translator'

function setLanguage(lang) {
	return { type: SET_XL8R, value: mkxl8(lang) }
}

function reduce(state={}, action) {
	switch(action.type) {
		case SET_XL8R:
			return { ...state, xl8: action.value }
		default:
			return state
	}
}

export default class AlcStoreProvider extends React.Component {
	constructor(props) {
		super(props)
		this.store = createStore(reduce, { xl8: mkxl8(props.lang) })
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.lang !== this.props.lang) {
			this.store.dispatch(setLanguage(nextProps.lang))
		}
	}

	render() {
		return (
			<Provider store={this.store}>
				<Alc />
			</Provider>
		)
	}
}
AlcStoreProvider.propTypes = {
	lang: PropTypes.string.isRequired,
}
