// VARIABLERNE:
let imgCont = document.querySelectorAll(".gallery_content");
let imgCon = document.querySelector("#imgLarge");

// Kigger efter  alle klasserne med gallery_content
imgCont.forEach((cont) => {
    // For hver container  kigger den efter  images
    let contImg = cont.querySelectorAll("img");

    contImg.forEach((e) => {
        // En eventlistener der kigger efter "click"
        e.addEventListener("click", () => {
            // skift source på mother of all images til det pågældende source
            imgCon.src = e.src;
        });
    });
});
