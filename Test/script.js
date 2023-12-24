// Example accounts data
const accounts = [
    { username: 'account1', profilePicture: './unnamed.jpg' },
    { username: 'account2', profilePicture: 'url-to-picture2.jpg' },
    // Add more accounts as needed
];

let currentAccountIndex = 0;

function showAccountList() {
    const accountList = document.getElementById('accountList');
    accountList.innerHTML = '';

    accounts.forEach((account, index) => {
        if (index !== currentAccountIndex) {
            const listItem = document.createElement('li');
            listItem.dataset.account = account.username;
            listItem.textContent = account.username;
            accountList.appendChild(listItem);
        }
    });

    accountList.style.display = 'block';
}


// Initial setup: Display the current account's profile picture

// ... (previous code)

function switchAccount(event) {
    const selectedAccount = event.target.dataset.account;
    if (selectedAccount) {
        // Logic to switch the current account
        currentAccountIndex = accounts.findIndex(account => account.username === selectedAccount);

        // Update the current account display
        const currentAccount = document.getElementById('currentAccount');
        currentAccount.style.backgroundImage = `url(${accounts[currentAccountIndex].profilePicture})`;

        // Hide the account list
        const accountList = document.getElementById('accountList');
        accountList.style.display = 'none';

        // Fetch recommended videos for the selected account using YouTube Data API
        fetchRecommendedVideos(accounts[currentAccountIndex].username);
    }
}
document.getElementById('currentAccount').style.backgroundImage = `url(${accounts[currentAccountIndex].profilePicture})`;

function fetchRecommendedVideos(username) {
    // Assuming you have a function to fetch recommended videos using the YouTube Data API
    // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
    const apiKey = 'AIzaSyB5tANFheLHimXT8-R_LnjLCndpyNXzTt4';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=1&videoCategoryId=10&key=${apiKey}&type=video`;

    // Make an API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const videoId = data.items[0].id;
            displayVideoInIframe(videoId);
        })
        .catch(error => console.error('Error fetching recommended videos:', error));
}

function displayVideoInIframe(videoId) {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
}

// ... (remaining code)
