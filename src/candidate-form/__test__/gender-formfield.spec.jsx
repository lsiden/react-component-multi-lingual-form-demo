import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { Component as GenderFormField } from '../gender-formfield'
import { simulateChange } from '../../lib/test-helpers'

const debug = require('debug')('alc-webcomponent:gender-formfield-spec')

describe('Birthyear form field', function() {

	describe('rendering', () => {
		let wrapper, select

		beforeEach(() => {
			wrapper = mount(<GenderFormField label="Gender" />)
			select = wrapper.find('select')
			// debug(wrapper.html())
		})

		it('renders a label', function() {
			const label = wrapper.find('label')
			expect(label.exists()).toBeTruthy()
			expect(label.text()).toBe('Gender')
		})

		it('renders a select tag with id attribute', () => {
			expect(select.exists()).toBeTruthy()
			expect(select.prop('id')).toBeTruthy()
		})

		it('select tag has 3 options', () => {
			expect(select.find('option').length).toBe(3)
		})

		it("first option is ''", () => {
			expect(select.find('option').first().prop('value')).toBe('')
		})

		it("remaining options have values 'm' and 'f'", () => {
			expect(select.find('option[value="m"]').exists()).toBeTruthy()
			expect(select.find('option[value="f"]').exists()).toBeTruthy()
		})
	})
})
