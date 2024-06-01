const colors = ["red", "green", "blue", "yellow"];
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    const colorDisplay = document.getElementById("color-display");
    const scoreDisplay = document.getElementById("score");
    const buttons = document.querySelectorAll(".color-button");

    function setRandomColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        colorDisplay.textContent = randomColor;
        colorDisplay.style.color = colors[Math.floor(Math.random() * colors.length)];
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.id === colorDisplay.textContent) {
                score++;
            } else {
                score = 0;
            }
            scoreDisplay.textContent = score;
            setRandomColor();
        });
    });

    setRandomColor();
});
