import { renderGallery } from "./dom.js";
import { axios, API_KEY } from "./api.js";



async function fetchData() {
    console.log("Button successfully clicked.")
    let searchTerm = "";
    try {
        const searchTerm = document.getElementById("artSearch").value;
        console.log("User input capture:", searchTerm)
        const url = `https://api.artsearch.io/artworks?api-key=${API_KEY}&query=${searchTerm}`;
        console.log("sending request to:", url);
        const response = await axios.get(url);
        console.log("Network request completed!");

        const data = response.data;
        console.log("API Returned this raw data structure:", data);
        renderGallery(data);
    } catch (error) {

        if (error.response) {
            console.log("error status:", error.response.status);
        } else {
            console.log("Something went wrong", error.message);
        }

    }
};
const searchBtn = document.getElementById("search-btn");
if (searchBtn) {
    searchBtn.addEventListener("click", fetchData);
    console.log("Event Listener attached to search-btn.");
};
