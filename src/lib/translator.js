import { sprintf } from './helpers'

const debug = require('debug')('alc-webcomponent:translator')

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