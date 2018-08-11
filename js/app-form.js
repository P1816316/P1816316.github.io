$(document).ready(function() {
    $(function() {

        $("form[name='contactForm']").validate({

            rules: {

                name: {
                    required: true,
                    minlength: 2
                },

                email: {
                    required: true,
                    email: true
                },
                handphone: {
                    required: true,
                },
                communicate: {
                    required: true,
                },
                time: {
                    required: true,
                },
                message: {
                    required: true,
                    minlength: 20
                },


            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email",
                message: {
                    required: "Please write some comments",
                },

            },

            submitHandler: function(form) {

                alert("Thank you for your sincere feedback!");
                location.replace("#");
            }
        });
    });
});