 export function renderGallery(data){
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
 }