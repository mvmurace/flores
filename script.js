const flowerContainer = document.querySelector('.flower-container');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 90 + 5}%`;
    flower.style.top = `${Math.random() * 90 + 5}%`;
    flower.style.animationDuration = `${Math.random() * 5 + 5}s`;

    flowerContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 7000);
}

setInterval(createFlower, 1000);
