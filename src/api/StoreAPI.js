export const getUsers = function(callback) {
	fetch('/getusers/')
	.then(response => response.json())
	.then(callback);
}

export const addUser = function(data, callback) {
	fetch('/adduser/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(callback)
}
