// Fetch user data from the API and update the DOM
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        // Extract user information
        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const pictureUrl = user.picture.large;

        // Update the DOM
        document.getElementById('user-name').innerText = fullName;
        document.getElementById('user-email').innerText = email;
        document.getElementById('user-picture').src = pictureUrl;
    } catch (error) {
        console.error('Error fetching the user:', error);
    }
}

// Set up the event listener for the button
document.getElementById('get-user-btn').addEventListener('click', fetchRandomUser);

// Fetch a user when the page loads for the first time
fetchRandomUser();
