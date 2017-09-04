import languages from './languages'
import Translator from './translator'

export function randomId() {
	return (Math.random() + 1).toString(36).substring(2)
}

export function isEmpty(val) {
	return val === ''
		|| val === null
		|| typeof val === 'undefined'
		|| val.length === 0
		|| typeof val === 'object' && Object.getOwnPropertyNames(val).length === 0
}

export function mkxl8(lang) {
	const langDesc = languages[lang]
	const dict = langDesc ? langDesc.dict : {}
	const translator = new Translator(dict)
	return translator.xlate.bind(translator)
}

export function arrayFromNodelist(nodeList) {
	return Array.prototype.slice.call(nodeList)
}

export const sprintf = require('sprintf-js').sprintf
