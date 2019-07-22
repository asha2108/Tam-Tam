$("#fname_error_message").hide();
$("#lname_error_message").hide();
$("#email_error_message").hide();
$("#txtarea_error_message").hide();
$("#success_message").hide();

$(document).ready(function () {
    var error_fname = false;
    var error_lname = false;
    var error_email = false;
    var error_txtarea = false;

    $("#form_fname").focusout(function () {
        check_fname();
    });
    $("#form_lname").focusout(function () {
        check_lname();
    });
    $("#form_email").focusout(function () {
        check_email();
    });
    $("#form_txtarea").focusout(function () {
        check_txtarea();
    });

    function check_fname() {
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#form_fname").val()
        if (pattern.test(fname) && fname !== '') {
            $("#fname_error_message").show();
            $("#fname_error_message").removeClass("error_form_fname").addClass("error_form_tick");
            $("#fname_error_message").html("");
            error_fname = true;
        }else{
            $("#fname_error_message").hide();
        }
    }
    function check_lname() {
        var pattern = /^[a-zA-Z]*$/;
        var lname = $("#form_lname").val()
        if (pattern.test(lname) && lname !== '') {
            $("#lname_error_message").show();
            $("#lname_error_message").removeClass("error_form_lname").addClass("error_form_tick");
            $("#lname_error_message").html("");
            error_lname = true;
        }else{
            $("#lname_error_message").hide();
        }
    }
    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#form_email").val()
        if (pattern.test(email) && email !== '') {
            $("#email_error_message").show();
            $("#email_error_message").removeClass("error_form_email").addClass("error_form_tick");
            $("#email_error_message").html("");
            error_email = true;
        }else{
            $("#email_error_message").hide();
        }
    }
    function check_txtarea() {
        var pattern = /^[0-9a-zA-Z\s\r\n]+$/;
        var txtarea = $("#form_txtarea").val()
        if (pattern.test(txtarea) && txtarea !== '') {
            $("#txtarea_error_message").show();
            $("#txtarea_error_message").removeClass("error_form_txtarea").addClass("error_form_tick_textarea");
            $("#txtarea_error_message").html("");
            error_txtarea = true;
        }else{
            $("#txtarea_error_message").hide();
        }
    }

    //on submit validation
    $('#submit').click(function(e) {
        var submit = false;
        
        e.preventDefault(); 
        
        if(error_fname === false){
            $("#fname_error_message").html("We need your first name.");
            $("#fname_error_message").show()
            $("#fname_error_message").addClass("error_form_fname");
            submit = false;
        }
        if(error_lname === false){
            $("#lname_error_message").html("We need your last name.");
            $("#lname_error_message").show()
            $("#lname_error_message").addClass("error_form_lname");
            submit = false;
        }
        if(error_email === false){    
            
            $("#email_error_message").html("Please use a valid e-mail address.");
            $("#email_error_message").show()
            $("#email_error_message").addClass("error_form_email");
            submit = false;
        }
        if(error_txtarea === false){    
            
            $("#txtarea_error_message").html("Sorry, your message can't be empty.");
            $("#txtarea_error_message").show()
            $("#txtarea_error_message").addClass("error_form_txtarea");
            var submit = false;
        }
        
        if(error_fname === true && error_lname === true && error_email === true && error_txtarea === true){
            submit = true;
        }else{
            $("#success_message").show();
            $("#success_message").html("<span class=\"fa fa-exclamation-circle\"></span>Please complete the form and try again.");
        }

        if(submit){
            $("#registration_form").css("visibility", "hidden");
            $("#success_message").show();
            $("#success_message").html("<span class=\"fa fa-check-circle\"></span>Thank you, we have received your message.");
            $('#submit').submit();

        }

    });


});





