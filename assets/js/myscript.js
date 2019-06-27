$(document).ready(function() {

    $("#form1").submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:3000/api/contact',
            data: $('#form1').serialize(),
            dataType: "json",
            beforeSend: function() {
                $(".main-btn").attr("disabled", true);
            },
            success: function(response) {
                $('#form1')[0].reset();
                console.log(response);
                $("#check").html(response.Success).addClass("alert");
                $(".main-btn").attr("disabled", false);
            },
            error: function() {}
        })
    });

    $("#appointment").submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:3000/api/appointment',
            data: $('#appointment').serialize(),
            dataType: "json",
            beforeSend: function() {
                $(".main-btn").attr("disabled", true);
            },
            success: function(response) {
                $('#appointment')[0].reset();
                console.log(response);
                $("#check").html(response.Success).addClass("alert");
                $(".main-btn").attr("disabled", false);

            },
            error: function() {}
        })
    });

    $("#profileDetail").submit(function(event) {
        event.preventDefault();
        var _form = $(this);
        var data = _form.serialize();
        data += '&_id=' + localStorage.getItem("_id") + '&token=' + localStorage.getItem("token");
        console.log(data);
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:3000/api/edtProfile',
            data: data,
            dataType: "json",
            beforeSend: function() {
                $(".main-btn").attr("disabled", true);
            },
            success: function(response) {
                console.log(response);
                $("#check").html(response.Success).addClass("alert");
                if (response.Success == "Profile Updated Successfully!!") {
                    localStorage.setItem("username", response.username);
                }
                $(".main-btn").attr("disabled", false);
            },
            error: function() {}
        })
    });




});