document.getElementById("input-Text").addEventListener("input", function() {
    let text = this.value;
    let displayText = document.getElementById("Repetidor-Text");

    displayText.textContent = text;

    if (text.length > 20) {
        displayText.style.backgroundColor = "lightblue";
    } else {
        displayText.style.backgroundColor = "lightgray";
    }
});