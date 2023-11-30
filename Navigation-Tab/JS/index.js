
// Get a reference to the div element
// let youtube = document.getElementById("youtube"),
//     facebook = document.getElementById("facebook"),
//     google = document.getElementById("google"),
//     yahoo = document.getElementById("yahoo"),
//     twitch = document.getElementById("twitch"),
//     gpt = document.getElementById("gpt");
let SearchIco = document.getElementById("search-icon"),
    SearchBtn = document.getElementById("btn"),
    SearchForm = document.getElementById("search-form"),
    SearchFormInput = document.getElementById("SearchFormInput"),
    isOpened = false;


// Add a click event listener to the div
// youtube.addEventListener("click", function () {
//     // Redirect to the desired URL when the div is clicked
//     window.location.href = "https://www.youtube.com"; // Replace with your desired URL
// });

// facebook.addEventListener("click", function () {
//     // Redirect to the desired URL when the div is clicked
//     window.location.href = "https://www.facebook.com"; // Replace with your desired URL
// });

// google.addEventListener("click", function () {
//     // Redirect to the desired URL when the div is clicked
//     window.location.href = "https://www.google.com"; // Replace with your desired URL
// });

// yahoo.addEventListener("click", function () {
//     // Redirect to the desired URL when the div is clicked
//     window.location.href = "https://www.yahoo.com"; // Replace with your desired URL
// });

// twitch.addEventListener("click", function () {
//     // Redirect to the desired URL when the div is clicked
//     window.location.href = "https://www.twitch.com"; // Replace with your desired URL
// });

// gpt.addEventListener("click", function () {
//     // Redirect to the desired URL when the div is clicked
//     window.location.href = "https://chat.openai.com/"; // Replace with your desired URL
// });

const clicked = () => {
    if (isOpened) {
        SearchBtn.style.width = "50px";
        SearchBtn.style.borderRadius = "50%";
        SearchBtn.style.transition = "width 400ms ease";
        SearchFormInput.value = "";
        SearchForm.classList.remove('active');
    } else {
        SearchBtn.style.width = "390px";
        SearchBtn.style.borderRadius = "50px";
        SearchBtn.style.transition = "width 400ms ease";
        SearchForm.classList.add("active");
    }
    isOpened = !isOpened;
}
SearchIco.onclick = clicked;


