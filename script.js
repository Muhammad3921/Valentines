document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').innerText = "Yay! Happy Valentine's Day! 🥰";
    document.getElementById('specialImage').style.display = 'flex';
});

document.getElementById('noButton').addEventListener('click', function(event) {
    const button = event.target;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const newX = Math.random() * (windowWidth - button.clientWidth);
    const newY = Math.random() * (windowHeight - button.clientHeight);

    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
});
