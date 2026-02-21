document.getElementById('generate-btn').addEventListener('click', function() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    
    const display = document.getElementById('result-display');
    display.innerText = randomLetter;
    
    // Piccola animazione di rimbalzo
    display.style.transform = "scale(1.2)";
    setTimeout(() => { display.style.transform = "scale(1)"; }, 100);
});