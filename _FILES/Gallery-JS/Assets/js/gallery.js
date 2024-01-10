// VARIABLERNE:
let imgCont = document.querySelectorAll(".gallery_content");
let imgCon = document.querySelector("#imgLarge");

// kig efter alle containere med class gallery_content
imgCont.forEach((cont) => {
  // for hver af de kontainere kig efter alle images
  let contImg = cont.querySelectorAll("img");

  contImg.forEach((e) => {
    // lav en lytter efter click på alle de billeder
    e.addEventListener("click", () => {
      // skift source på mother of all images til det pågældende source
      imgCon.src = e.src;
    });
  });
});
