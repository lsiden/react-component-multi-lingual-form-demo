import { sprintf } from './helpers'

const debug = require('debug')('demo-form-component:translator')

export default class {
	constructor(dictionary={}) {
		this.dictionary = dictionary
	}

	xlate(key, args=[]) {
		// debug(key)
		// debug(this.dictionary)
		return sprintf((this.dictionary[key] || key), ...args)
	}
}