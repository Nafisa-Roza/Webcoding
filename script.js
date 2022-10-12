const userid = document.getElementById('userid')
const password = document.getElementById('password')
const name = document.getElementById('name')
const address = document.getElementById('address')
const country = document.getElementById('country')
const zipcode = document.getElementById('zipcode')
const email = document.getElementById('email')
const sex = document.getElementById('sex')
const language = document.getElementById('language')
const about = document.getElementById('about')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {
	let messages = []
	if (userid.value === ''|| name.value == null) {
		messages.push('userid is required')
	}
	if (messages.length > 0) {
			e.preventDefault()
			errorElement.innerText = messages.join(', ')
		}
})