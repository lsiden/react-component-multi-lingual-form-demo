import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Component as CandidateForm } from '../index'
import { simulateChange } from '../../lib/test-helpers'

const debug = require('debug')('alc-webcomponent:candidate-form-spec')

function xl8(val) {
	return val
}

function onSubmit() {}

describe('CandidateForm', function() {

	describe('minimum expectations', () => {
		let wrapper

		beforeEach(() => {
			wrapper = shallow(<CandidateForm xl8={xl8} onSubmit={onSubmit} />)
		})

		it('renders a form element', function() {
			expect(wrapper.find('form').exists()).toBeTruthy()
		})
	})

	describe('conditional rendering', () => {
		let store, wrapper, onBehalfOf

		function reduce(state, action) {
			return state
		}
		beforeEach(() => {
			store = createStore(reduce, { xl8: xl8 })
			wrapper = mount(
				<Provider store={store}>
					<CandidateForm xl8={xl8} onSubmit={onSubmit} />
				</Provider>
			)
			onBehalfOf = wrapper.find('[name="onBehalfOf"]')
		})

		it('renders birth-year and gender inputs only when \'on-behalf-of\' input is selected', () => {
			simulateChange(onBehalfOf, '')
			expect(wrapper.find('[name="birthYear"]').length).toBe(0)
			expect(wrapper.find('[name="gender"]').length).toBe(0)

			simulateChange(onBehalfOf, 'self')
			expect(wrapper.find('[name="birthYear"]').length).toBe(1)
			expect(wrapper.find('[name="gender"]').length).toBe(1)

			simulateChange(onBehalfOf, '')
			expect(wrapper.find('[name="birthYear"]').length).toBe(0)
			expect(wrapper.find('[name="gender"]').length).toBe(0)
		})
	})
})
