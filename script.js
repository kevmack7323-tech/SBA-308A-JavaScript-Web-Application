import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.9/+esm";
import { API_KEY } from "./keys.js";



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

        const imageElement = document.getElementById("ArtistPiece");

    if (data && data.artworks && data.artworks.length > 0) {
           const gallery = document.getElementById("gallery-container");
           gallery.innerHTML = "";

            data.artworks.forEach(art =>{
                const img = document.createElement("img");
                img.src = art.image;
                img.alt = "Art Piece";
                img.loading = "eager"
                img.style.width = "200px";
                gallery.appendChild(img);
            });

            console.log(`Image rendered ${data.artworks.length} images.`);
    } else {
            gallery.innerHTML= "<p>No artwork found matching that name</p>";
        }
    } catch (error) {

        if (error.response){
            console.log("error status:", error.response.status);
        } else{
            console.log("Something went wrong", error.message);
        }

        }
    };
const searchBtn = document.getElementById("search-btn");
if(searchBtn){
    searchBtn.addEventListener("click", fetchData);
    console.log("Event Listener attached to search-btn.");
};
