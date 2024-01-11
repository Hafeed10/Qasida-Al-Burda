document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("image-gallery");

    // Replace this URL with your actual API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayImages(data);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });

    function displayImages(images) {
        images.forEach(image => {
            const imageElement = document.createElement("img");
            imageElement.src = image.url;
            imageElement.alt = image.title;
            galleryContainer.appendChild(imageElement);
        });
    }
});
