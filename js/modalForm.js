$(document).ready(function() {
    $("#formLoginBtn").click(function() {
        $("#id01").css("display", "block");
    })

    $(".close, .cancelbtn").click(function() {
        $("#id01").css("display", "none");
    })

    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});