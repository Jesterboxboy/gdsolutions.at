document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("gdpr-banner");
    const acceptButton = document.getElementById("gdpr-accept");

    // Check if the user has already accepted
    if (!localStorage.getItem("gdprAccepted")) {
        banner.style.display = "flex";
    }

    // When the user clicks "OK"
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("gdprAccepted", "true");
        banner.style.display = "none";
    });
});
