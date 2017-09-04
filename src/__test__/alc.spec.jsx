import React from 'react';
import PropTypes from 'prop-types'
import { shallow, mount, render } from 'enzyme';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Alc from '../alc'
import Translator from '../lib/translator'

const debug = require('debug')('alc-webcomponent:alc.spec')

describe('Alc', function() {
	describe('response to translator property', () => {

		const SET_XL8R = 'set translator'
		const enErrorMsg = 'required'
		const spErrorMsg = 'necesario'
		const spDict = { [enErrorMsg]: spErrorMsg }

		function mkxl8(lang) {
			const dict = lang === 'sp' ? spDict : {}
			const tr = new Translator(dict)
			return tr.xlate.bind(tr)
		}

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

		class AlcStoreProvider extends React.Component {
			constructor(props) {
				super(props)
				this.store = createStore(reduce, { xl8: mkxl8('en') })
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

		let wrapper, errorMsg

		beforeEach(() => {
			const translator = new Translator({})
			const xl8 = translator.xlate.bind(translator)
			wrapper = mount(<AlcStoreProvider lang="en" />)
			errorMsg = wrapper.find('.input-error').first()
		})

		it('renders', function() {
			expect(shallow(<AlcStoreProvider lang='en' />)).toBeTruthy()
		})

		// This test requires connecting to Redux store.
		it('re-renders error message with new translation in response to change of translator', () => {
			expect(errorMsg.text()).toBe(enErrorMsg)
			wrapper.setProps({ lang: 'sp' }, () => {
				expect(errorMsg.text()).toBe(spErrorMsg)
			})
		})
	})
})
