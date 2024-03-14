document.addEventListener("DOMContentLoaded", function() {
    var popupOverlay = document.getElementById("popup-overlay");
    var closeButton = document.getElementById("close-popup");

    // Visa popupen när sidan laddas
    popupOverlay.style.display = "flex";

    // Stäng popupen när användaren klickar på stängningsknappen
    closeButton.addEventListener("click", function() {
        popupOverlay.style.display = "none";
    });
});
