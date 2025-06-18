// This is where your JS goes!

// You can fetch data from https://cs571api.cs.wisc.edu/rest/su25/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571api.cs.wisc.edu/rest/su25/ice/pasta
//  https://cs571api.cs.wisc.edu/rest/su25/ice/pizza

const reviewNum = 0;

fetch('https://cs571api.cs.wisc.edu/rest/su25/ice/chili', {
	headers: {
		'X-CS571-ID': CS571.getBadgerId(),
	},
})
	.then((response) => {
		//Callback function
		console.log(response.status);
		if (response.status !== 200) {
			throw new error();
		} else {
			return response.json();
		}
	})
	.then((data) => {
		console.log(data);
		// TODO: Insert the name into the webpage, insert the data into the webpage
	})
	.catch((e) => {
		alert('Oops! invalid badger id');
	});

// TODO Implement the update yield!
function updateYield() {
	alert('I should update the yield!');
}

// TODO Implement the display review!
function displayReview() {
	alert('I should display a review!');
}
