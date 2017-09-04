import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PropTypes from 'prop-types'
import Translator from '../translator'

import withValidation from '../with-validation'
import { simulateChange } from '../test-helpers'

const debug = require('debug')('alc-webcomponent:with-validation-spec')

describe('WithValidation', () => {

	function validator(val) {
		return val === 'invalid' ? 'wrong value!' : ''
	}

	describe('with <input>, no onChange property', () => {

		function MyInput(props) {
			return <input type="text" {...props} />
		}
		let InputWithValidation, wrapper, input

		beforeAll(() => {
			InputWithValidation = withValidation(MyInput)
		})

		beforeEach(() => {
			wrapper = mount(<InputWithValidation validator={validator} />)
			input = wrapper.find('input')
		})

		it('is initially valid', () => {
			expect(input.hasClass('invalid')).toBeFalsy()
			expect(wrapper.find('.input-error').length).toBe(0)
		})

		it('remains valid after getting a valid value', () => {
			simulateChange(input, '2')
			expect(input.hasClass('invalid')).toBeFalsy()
			expect(wrapper.find('.input-error').length).toBe(0)
		})

		it('becomes invalid if validator not satisfied', () => {
			simulateChange(input, '2')
			simulateChange(input, 'invalid')
			expect(input.hasClass('invalid')).toBeTruthy()
			expect(wrapper.find('.input-error').length).toBe(1)
			expect(wrapper.find('.input-error').text()).toBe('wrong value!')
		})
	})

	describe('with input and onChange property', () => {

		function MyInput(props) {
			return <input type="text" {...props} />
		}
		let InputWithValidation, wrapper, input, onChange

		beforeAll(() => {
			InputWithValidation = withValidation(MyInput)
		})

		beforeEach(() => {
			onChange = jest.fn()
			wrapper = mount(<InputWithValidation onChange={onChange} validator={validator} />)
			input = wrapper.find('input')
		})

		it('calls onChange property', () => {
			expect(onChange.mock.calls.length).toBe(0)
			simulateChange(input, '1')
			expect(onChange.mock.calls.length).toBe(1)
			expect(onChange.mock.calls[0][0].target.value).toBe('1')
		})

		it('becomes invalid if validator not satisfied', () => {
			simulateChange(input, '2')
			simulateChange(input, 'invalid')
			expect(input.hasClass('invalid')).toBeTruthy()
			expect(wrapper.find('.input-error').length).toBe(1)
			expect(wrapper.find('.input-error').text()).toBe('wrong value!')
		})
	})

	describe('with <select>', () => {

		function MySelect(props) {
			return (
				<select {...props} >
					<option value=""></option>
					<option value="1">Option One</option>
					<option value="2">Option Two</option>
				</select>
			)
		}
		let MySelectWithValidation, wrapper, input

		beforeAll(() => {
			MySelectWithValidation = withValidation(MySelect)
		})

		beforeEach(() => {
			wrapper = mount(<MySelectWithValidation validator={validator} />)
			input = wrapper.find('select')
		})

		it('becomes invalid if validator not satisfied', () => {
			simulateChange(input, '2')
			simulateChange(input, 'invalid')
			expect(input.hasClass('invalid')).toBeTruthy()
			expect(wrapper.find('.input-error').length).toBe(1)
			expect(wrapper.find('.input-error').text()).toBe('wrong value!')
		})
	})
})
