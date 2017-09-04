import Translator from '../translator'

describe('translator', () => {
	it('Requires dictionary', () => {
		const translator = new Translator({})
		expect(translator).toBeTruthy()
	})

	it('Returns argument if phrase not found', () => {
		const translator = new Translator({})
		expect(translator.xlate('covfefe')).toBe('covfefe')
	})

	it('Returns phrase if found in dictionary', () => {
		const translator = new Translator({
			'Hello': 'Hola'
		})
		expect(translator.xlate('Hello')).toBe('Hola')
	})
})