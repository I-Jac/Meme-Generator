const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
let selectedBackground = null;
let selectedFigure = null;
let selectedObjects = [];

// Function to handle image selection
function addImageToCanvas(src, x, y) {
    const img = new Image();
    img.onload = function () {
        ctx.drawImage(img, x, y, canvas.width, canvas.height);
    };
    img.src = src;
}

// Select and draw background
document.getElementById('backgroundGallery').addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        selectedBackground = event.target.src;
        // Clear canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        addImageToCanvas(selectedBackground, 0, 0);
    }
});

// Select and place figure
document.getElementById('figureGallery').addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        selectedFigure = event.target.src;
        // Place figure in the center of the canvas
        addImageToCanvas(selectedFigure, canvas.width / 4, canvas.height / 2);
    }
});

// Select and place objects (like clothing, vehicles, etc.)
document.getElementById('objectGallery').addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        const objectSrc = event.target.src;
        selectedObjects.push(objectSrc);
        // Place objects at a default position (can be enhanced with drag-and-drop functionality)
        addImageToCanvas(objectSrc, canvas.width / 4, canvas.height / 4);
    }
});

// Function to download the meme
function downloadMeme() {
    const link = document.createElement('a');
    link.download = 'custom_meme.png';
    link.href = canvas.toDataURL();
    link.click();
}
