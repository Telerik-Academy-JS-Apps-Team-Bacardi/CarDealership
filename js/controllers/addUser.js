/**
 * Created by name on 29.8.2015 ã..
 */
var registerUserCtrl = (function () {
    function render() {
        $('.userLoginSet').attr('tabindex', '0');

        Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "Av5f9x57L6qsWpxohLSaXtqUD32Pblzm4dyUnYaJ");

        var currentUser = Parse.User.current();

        var PASSWORD_CONSTRAINTS = {
            min: 3,
            max: 22
        };            

        //TODO The logout Stuff!!!
        if (currentUser) {
            //Check if user is already looged
            var currentUser = currentUser.get("username"),
                loggedInAlert = $('<div/>').addClass('alert alert-info').html('You are already logged in as <strong>' + currentUser + '</strong>. If you want to log out press the button in the upper right corner!');

            $('#userLoginContainer').empty().append(loggedInAlert);
        }
        else {
            //Sign up or register to access the adds section!!
            var user = new Parse.User();

            var registerUser = $('#registerUser');
                
            //Register a new user
            registerUser.on('click', function () {
                var userName = $('#userUsername').val(),
                    password = $('#userPassword').val(),
                    firstName = $('#userFirstName').val(),
                    lastName = $('#userLastName').val(),
                    email = $('#userEmailAddress').val(),
                    passwordConfirm = $('#userPasswordConfirm').val(),
                    phone = $('#userPhone').val();

                var passwordIsValid = validator.validatePassword(password, passwordConfirm);
                var namesAreValid = validator.validateUserNames(firstName, lastName);

                if (passwordIsValid && namesAreValid) {
                    user.set("username", userName);
                    user.set("password", password);
                    user.set("firstName", firstName);
                    user.set('lastName', lastName);
                    user.set('email', email);
                    user.set('phone', phone);

                    user.signUp(null, {
                        success: function (user) {
                            console.log("USER REGISTERED");
                            location.reload();
                        },
                        error: function (user, error) {
                            console.log(error);
                        }
                    });
                }
            });
        }
    };

    return {
        render: render
    }
} ());
