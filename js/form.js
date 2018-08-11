$(document).ready(function() {
    $(function() {

        $("form[name='myForm']").validate({

            rules: {

                firstname: {
                    required: true,
                    minlength: 2
                },
                lastname: "required",

                messages: {
                    required: true,
                    minlength: 20
                }


            },

            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                messages: {
                    required: "Please write some comments",
                },

            },

            submitHandler: function(form) {
                $("#dialog-contact-form").dialog("open");

                /* alert("Thank you for your sincere feedback!");
                location.replace("#"); */
            }
        });
    });
    $("#dialog-contact-form").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        width: '500px',
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        },
    });

    $("#sub").click(function() {});
});