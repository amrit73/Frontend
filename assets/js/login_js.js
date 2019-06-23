$(document).ready(function() {
    $(".info-item .btn").click(function() {
        $(".login-container").toggleClass("log-in");
    });
    $(".submit-form").click(function() {
        $(".alert").hide();
        $(this).closest("form").submit()
    });
});