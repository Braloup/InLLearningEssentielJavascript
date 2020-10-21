let galImages = document.querySelectorAll("#singleGallery img");

for (let i = à; i < galImages.length; i++) {
  let image = galImages[i];
  image.addEventListener(
    "click",
    () => {
      alert("Bonjour!");
    },
    false
  );
  image.addEventListener(
    "click",
    () => {
      alert("Aurevoir");
    },
    false
  );
}

console.log(galImages);
