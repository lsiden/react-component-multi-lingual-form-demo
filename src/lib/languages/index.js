import englishDict from './en'
import hebrewDict from './he'

function mkResult(code, name, dict) {
	return { code, name, dict }
}

export default {
	'en': mkResult('en', 'English', englishDict),
	'he': mkResult('he', 'Hebrew', hebrewDict),
}