import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { Component as BirthyearFormField } from '../birthyear-formfield'
import { simulateChange } from '../../lib/test-helpers'

const debug = require('debug')('demo-form-component:birthyear-formfield-spec')

function xl8(val) {
	return val
}

describe('Birthyear form field', function() {

	describe('rendering', () => {
		let wrapper, input

		beforeEach(() => {
			wrapper = mount(<BirthyearFormField label="Birth Year" />)
			input = wrapper.find('input')
		})

		it('renders a label', function() {
			expect(wrapper.contains('<label'))
		})

		it('renders one input', () => {
			expect(input.length).toBe(1)
		})

		it('input has an id attribute', () => {
			expect(input.prop('id')).toBeTruthy()
		})
	})
})
