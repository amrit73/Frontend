$("#admin_user").submit(function(event) {
    event.preventDefault();
    var _form = $(this);
    var postForm = { //Fetch form data
        'token': localStorage.getItem("token"),
        'id': localStorage.getItem("_id"),
        'username': localStorage.getItem("username"),
        'u_username': $('input[name=username]').val(),
        'email': $('input[name=email]').val(),
        'phone': $('input[name=phone]').val(),
        'name': $('input[name=name]').val(),
        'user_status': $("input[name='user_status']:checked").val(),
        'user_type': $("input[name='user_type']:checked").val(),
        'password': $('input[name=password]').val(),
        'confpassword': $('input[name=password]').val(),
    };
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3000/api/admin/add_user',
        data: postForm,
        dataType: "json",
        beforeSend: function() {
            $(".main-btn").attr("disabled", true);
        },
        success: function(response) {
            _form[0].reset();
            $("#check").html(response.Success).addClass("alert");
            $(".main-btn").attr("disabled", false);
        },
        error: function() {}
    })
});

$("#admin_user_edit").submit(function(event) {
    event.preventDefault();
    var _form = $(this);
    var postForm = { //Fetch form data
        'token': localStorage.getItem("token"),
        'id': localStorage.getItem("_id"),
        '_id': $('input[name=_id]').val(),
        'username': $('input[name=username]').val(),
        'email': $('input[name=email]').val(),
        'phone': $('input[name=phone]').val(),
        'name': $('input[name=name]').val(),
        'user_status': $("input[name='user_status']:checked").val(),
        'user_type': $("input[name='user_type']:checked").val(),
        'password': $('input[name=password]').val(),
        'confpassword': $('input[name=password]').val(),
    };
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3000/api/admin/update_user',
        data: postForm,
        dataType: "json",
        beforeSend: function() {
            $(".main-btn").attr("disabled", true);
        },
        success: function(response) {
            $("#check").html(response.Success).addClass("alert");
            $(".main-btn").attr("disabled", false);
        },
        error: function() {}
    })
});