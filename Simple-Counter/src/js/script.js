const resultDisplay = document.getElementById("resultDisplay");
const increaseCountBtn = document.getElementById("increaseCount");
const resetCountBtn = document.getElementById("resetCount");
const decreaseCountBtn = document.getElementById("decreaseCount");

// Initial counter state
let count = 0;

// Update the displayed count
function updateDisplay() {
    resultDisplay.textContent = count;
}

// Core actions
function increaseCount() {
    count++;
    updateDisplay();
}

function resetCount() {
    count = 0;
    updateDisplay();
}

function decreaseCount() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}

// Button click handlers
increaseCountBtn.addEventListener("click", increaseCount);
resetCountBtn.addEventListener("click", resetCount);
decreaseCountBtn.addEventListener("click", decreaseCount);

// Keyboard support - (ArrowUp: increase) | (ArrowDown: decrease) | (0 (zero): reset)

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "ArrowUp") {
        event.preventDefault();
        increaseCount();
    } else if (key === "ArrowDown") {
        event.preventDefault();
        decreaseCount();
    } else if (key === "0") {
        event.preventDefault();
        resetCount();
    }
});

// Initialize display on load
updateDisplay();