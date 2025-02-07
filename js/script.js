document.addEventListener("DOMContentLoaded", function () {
    // Function to update the time dynamically
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let amPm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12; // Convert 0 to 12 for midnight (12 AM)
        minutes = minutes < 10 ? '0' + minutes : minutes;

        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.innerText = `${hours}:${minutes} ${amPm}`;
        }
    }

    // Update time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display time immediately

    // Tab Navigation Logic
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    // Hide all tabs except homeDiv initially
    tabContents.forEach(content => content.style.display = "none");
    document.getElementById("homeDiv").style.display = "block";

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetTab = document.getElementById(targetId);

            if (!targetTab) return; // Prevent errors if ID is missing

            // Hide all tabs
            tabContents.forEach(content => content.style.display = "none");

            // Show the selected tab
            targetTab.style.display = "block";

            // Update active button state
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Menu button hover descriptions
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

    // Overlay Logic
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.display = "flex"; // Show overlay

        // Hide overlay after 4 seconds
        setTimeout(() => {
            overlay.style.display = "none";
        }, 4000);
    }

    // Device & Remote Settings Panel Toggle
    const deviceSettingsButton = document.getElementById("deviceSettingsButton");
    const rightPanel = document.getElementById("rightPanelDiv");

    if (deviceSettingsButton && rightPanel) {
        deviceSettingsButton.addEventListener("click", function () {
            rightPanel.style.right = (rightPanel.style.right === "0px") ? "-500px" : "0px";
        });
    }
});
