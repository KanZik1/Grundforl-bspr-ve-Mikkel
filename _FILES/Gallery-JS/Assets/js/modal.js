function displayModal(id) {
  document.getElementById(id).style.display = "block";
}

function displayPhoto(id, src, desc) {
  document.getElementById(id).style.display = "block";
  document.getElementById("photo").src = src;
  document.getElementById("desc").innerHTML = desc;
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
