import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { Component as OnBehalfOfFormField } from '../on-behalf-of-formfield'
import { simulateChange } from '../../lib/test-helpers'

const debug = require('debug')('demo-form-component:gender-formfield-spec')

describe('Birthyear form field', function() {

	describe('rendering', () => {
		let wrapper, select

		beforeEach(() => {
			wrapper = mount(<OnBehalfOfFormField label="OnBehalfOf" />)
			select = wrapper.find('select')
			// debug(wrapper.html())
		})

		it('renders a label', function() {
			const label = wrapper.find('label')
			expect(label.exists()).toBeTruthy()
			expect(label.text()).toBe('OnBehalfOf')
		})

		it('renders a select tag with id attribute', () => {
			expect(select.exists()).toBeTruthy()
			expect(select.prop('id')).toBeTruthy()
		})

		it('select tag has 4 options', () => {
			expect(select.find('option').length).toBe(4)
		})

		it("first option is ''", () => {
			expect(select.find('option').first().prop('value')).toBe('')
		})

		it("remaining options have values 'self', 'relative', and 'client'", () => {
			expect(select.find('option[value="self"]').exists()).toBeTruthy()
			expect(select.find('option[value="relative"]').exists()).toBeTruthy()
			expect(select.find('option[value="client"]').exists()).toBeTruthy()
		})
	})
})
