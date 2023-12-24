
// Get a reference to the div element
let youtube = document.getElementById("youtube"),
    facebook = document.getElementById("facebook"),
    google = document.getElementById("google"),
    yahoo = document.getElementById("yahoo"),
    twitch = document.getElementById("twitch"),
    gpt = document.getElementById("gpt"),
    //<==========================================>
    accBtn = document.getElementById("acc-btn"),
    accList = document.getElementById("acc-list"),
    //<==========================================>
    SearchIco = document.getElementById("search-icon"),
    SearchBtn = document.getElementById("btn"),
    SearchForm = document.getElementById("search-form"),
    SearchFormInput = document.getElementById("SearchFormInput"),
    cursor = document.querySelector(".cursor"),
    searchIsOpened = false,
    accBtnIsOpened = false;


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


// const search = () => {
//     var searchQuery = document.getElementById('SearchFormInput').value;
//     if (searchQuery === "") {

//     } else {
//         SearchForm.action = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
//         SearchForm.submit();
//         SearchFormInput.value = "";
//     }
// }
//----------Custom-Cursor----------//
// document.addEventListener("mousemove", e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
// })



//----------Search-box----------//
const btnClicked = () => {
    if (searchIsOpened) {
        SearchBtn.style.width = "50px";
        SearchFormInput.value = "";
        setTimeout(() => {
            SearchForm.classList.remove("active");
        }, 200);
    } else {
        SearchBtn.style.width = "390px";
        SearchBtn.style.borderRadius = "50px";
        SearchBtn.style.transition = "width 400ms ease";
        SearchForm.classList.add("active");
    }

    searchIsOpened = !searchIsOpened;

}
//----------account-selector----------//    
const accBtnClicked = () => {
    if (accBtnIsOpened) {
        accList.style.display = "none";
    } else {
        accList.style.display = "flex";
    }

    accBtnIsOpened = !accBtnIsOpened;
}

accBtn.onclick = accBtnClicked;
SearchIco.onclick = btnClicked;






