document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-button");
    const descriptionBox = document.getElementById("description-text");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            const text = this.getAttribute("data-text");
            descriptionBox.textContent = text;
        });

        button.addEventListener("mouseleave", function () {
            descriptionBox.textContent = "";
        });
    });
});


// Function to update the time dynamically
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('current-time').innerText = `${hours}:${minutes}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
