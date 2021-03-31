console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    loadImg();
    loadBreeds();
  })

function loadImg() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => addImg(image))
    });
}

function addImg(img) {
    const container = document.getElementById("dog-image-container");
    const image = document.createElement("img");

    image.src = img;
    container.appendChild(image);
};

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {
        const breeds = Object.keys(results.message);
        addBreeds(breeds);
       
    })
}


function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.innerText = breed;
      ul.appendChild(li);
      li.addEventListener("click", function(event) {
        event.target.style.color = "gold";
      });
    });
}

function filterBreeds(breed) {
    
}