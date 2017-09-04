import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Component as DemoFormComponent } from '../index'
import { simulateChange } from '../../lib/test-helpers'

const debug = require('debug')('demo-form-component:candidate-form-spec')

function xl8(val) {
	return val
}

function onSubmit() {}

describe('DemoFormComponent', function() {

	describe('minimum expectations', () => {
		let wrapper

		beforeEach(() => {
			wrapper = shallow(<DemoFormComponent xl8={xl8} onSubmit={onSubmit} />)
		})

		it('renders a form element', function() {
			expect(wrapper.find('form').exists()).toBeTruthy()
		})

		it('renders birth-year and gender inputs', () => {
			expect(wrapper.find('[name="birthYear"]').length).toBe(1)
			expect(wrapper.find('[name="gender"]').length).toBe(1)
		})
	})
})
