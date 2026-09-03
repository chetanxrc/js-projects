// Initialize theme picker when DOM is ready
document.addEventListener("DOMContentLoaded", initThemePicker);

// Theme color mapping - keys match button IDs
const themeColors = {
    "btn-1": "#008846",
    "btn-2": "#880000",
    "btn-3": "#002988",
    "btn-4": "#883600",
    "btn-5": "#880039"
};

const mainHeading = document.getElementById("mainHeading");
const buttons = document.querySelectorAll(".theme-buttons button");
const bgGradient = document.getElementById("bgGradient");

function initThemePicker() {
    buttons.forEach(button => {
        let id = button.getAttribute("id");

        // Apply initial background color to button based on theme
        if (themeColors[id]) {
            button.style.backgroundColor = themeColors[id];
        }

        // Add click listener to change theme colors
        button.addEventListener("click", () => {
            mainHeading.style.color = themeColors[id];
            bgGradient.style.backgroundColor = themeColors[id];
        });
    });
}