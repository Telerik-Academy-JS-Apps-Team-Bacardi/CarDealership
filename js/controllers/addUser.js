/**
 * Created by name on 29.8.2015 ã..
 */
var addUser = ( function () {
    return {
        add: function () {
            Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "Av5f9x57L6qsWpxohLSaXtqUD32Pblzm4dyUnYaJ");

            var PASSWORD_CONSTRAINTS = {
                min: 3,
                max: 12
            };

            function validatePassword(password, passwordConfirm) {
                if (password != passwordConfirm) {
                    $('#userMessages').text('Passwords do not match!!!');
                    return false;
                }
                if (password < PASSWORD_CONSTRAINTS.min || password > PASSWORD_CONSTRAINTS.max) {
                    $('#userMessages').text('Password is too long or too short!!!');
                    return false;
                }
                return true;
            }

            var currentUser = Parse.User.current();
            //TODO The logout Stuff!!!
            if (currentUser) {
                //Check if user is already looged
                console.log('User already logged');
                //TODO To load the add offers page
            }
            else {
                //Sign up or register to access the adds section!!
                var user = new Parse.User();

                var userSignUp = $('#login');
                var registerUser = $('#registerUser');

//Sign Up existing user
                userSignUp.on('click', function () {
                    var userName = $('#userName').val(),
                        password = $('#loginPassword').val();
                    console.log(userName, password);
                    Parse.User.logIn(userName, password, {
                        success: function (user) {
                            console.log('User Logged');
                            //TODO To load the add offers page
                        },
                        error: function (user, error) {
                            console.log(error.message);
                        }
                    });

                });
//Register a new user
                registerUser.on('click', function () {
                    var userName = $('#userUsername').val(),
                        password = $('#userPassword').val(),
                        firstName = $('#userFirstName').val(),
                        lastName = $('#userLastName').val(),
                        email = $('#userEmailAddress').val(),
                        passwordConfirm = $('#userPasswordConfirm').val();

                    validatePassword(password, passwordConfirm);

                    if (validatePassword) {
                        user.set("username", userName);
                        user.set("password", password);
                        user.set("firstName", firstName);
                        user.set('lastName', lastName);
                        user.set('email', email);

                        user.signUp(null, {
                            success: function (user) {
                                console.log("USER REGISTERED")
                            },
                            error: function (user, error) {
                                console.log(error);
                            }
                        });
                    }
                });
            }
        }
    }


}());

