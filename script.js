function openEnvelope() {
    let envelope = document.getElementById("envelope-img");
    let letter = document.getElementById("letter");
    let music = document.getElementById("bg-music");

    // Play background music
    music.play();

    // Change envelope image
    envelope.src = "images/envelope-open.png";

    // Show letter with smooth effect
    setTimeout(() => {
        letter.style.display = "block";
        letter.style.animation = "slideDown 1s ease-in-out";
    }, 700);
}

// Letter slide animation
document.styleSheets[0].insertRule(`
    @keyframes slideDown {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`, 0);