// Lightbox config

lightbox.option({
  fitImagesInViewport: true
});

// Search function

const search = document.querySelector(".search");
search.addEventListener("keyup", function(event) {
  const searchTerm = event.target.value.toLowerCase();
  const photos = document.querySelectorAll(".photo");
  const links = document.querySelectorAll(".photo a");
  const titles = [];
  for (let i = 0; i < links.length; i++) {
    titles.push(links[i].getAttribute("data-title").toLowerCase());
  }
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].indexOf(searchTerm) > -1) {
      photos[i].style.display = "block";
    } else {
      photos[i].style.display = "none";
    }
  }
});
