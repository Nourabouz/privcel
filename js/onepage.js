const images = [
    'images/11red.jpeg',
    'images/11red.jpeg',
    'images/11red.jpeg',
    'images/11red.jpeg',
];
const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;
//next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
    const imageTag = document.getElementById('');
    currentImage++;
    if (currentImage >= lastImage) {
        currentImage = 4;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '5';
});