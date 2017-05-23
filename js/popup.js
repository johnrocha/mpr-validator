$(document).ready(function () {
    console.log("JQUERY IS READY!");
    $("#modal-open-button").click(function (e) {
        console.log('$("#modal-open-button").click');
        openPopup();
    });
    $("#modal-close-button").click(function (e) {
        console.log('$("#modal-close-button").click');
        closePopup();
    });
    $("#modal-closee-button").click(function (e) {
        console.log('$("#modal-close-button").click');
        closePopup();
    });
});
function openPopup() {
    $("#modal-open-button").prop("disabled", true);
    $("#popup-content").fadeIn();
}
function closePopup() {
    $("#modal-open-button").prop("disabled", false);
    $("#popup-content").fadeOut();
}
