function generateColors() {
    const palette = document.getElementById("palette");
    palette.innerHTML = ""; // clear old colors

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();

        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.style.backgroundColor = color;
        colorBox.innerText = color;

        // Copy color on click
        colorBox.onclick = () => {
            navigator.clipboard.writeText(color);
            alert(`Copied: ${color}`);
        };

        palette.appendChild(colorBox);
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate colors on page load
generateColors();
