import {isEmpty} from '../helpers'

describe('helpers', () => {
	describe('isEmpty()', () => {
		it('identifies empty string as empty', () => {
			expect(isEmpty('')).toBeTruthy()
			expect(isEmpty('not empty')).toBeFalsy()
		})

		it('identifies null value as empty', () => {
			expect(isEmpty(null)).toBeTruthy()
			expect(isEmpty(1)).toBeFalsy()
		})

		it('identifies undefined value as empty', () => {
			expect(isEmpty(undefined)).toBeTruthy()
		})

		it('identifies empty array as empty', () => {
			expect(isEmpty([])).toBeTruthy()
			expect(isEmpty([''])).toBeFalsy()
		})

		it('identifies empty object as empty', () => {
			expect(isEmpty({})).toBeTruthy()
			expect(isEmpty({ one: 1 })).toBeFalsy()
		})
	})
})