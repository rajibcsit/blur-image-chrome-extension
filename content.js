function replaceImages() {
  var images = document.querySelectorAll("img");
  images.forEach(function (image) {
    // Add a blur effect to the image
    image.style.filter = "blur(8px)";

    // Add a click event listener to remove the blur effect on click
    image.addEventListener("click", function () {
      // Remove the blur effect
      image.style.filter = "none";
    });
  });
}

// Execute image replacement logic when the content script is injected
replaceImages();
