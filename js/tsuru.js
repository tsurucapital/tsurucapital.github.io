// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
for (var img of document.getElementsByClassName('gallery-img')){
  var modalImg = document.getElementById("modal-img");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }
}

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
  modal.style.display = "none";
}
