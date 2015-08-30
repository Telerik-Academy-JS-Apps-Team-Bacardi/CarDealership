/**
 * Created by name on 29.8.2015 ã..
 */
var addUser = ( function () {
    return {
        add: function () {
            $('.userLoginSet').attr('tabindex','0');

            Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "Av5f9x57L6qsWpxohLSaXtqUD32Pblzm4dyUnYaJ");

            var currentUser = Parse.User.current();


            var PASSWORD_CONSTRAINTS = {
                min: 3,
                max: 22
            };

            function validatePassword(password, passwordConfirm) {
                if (password != passwordConfirm) {
                    $('#userRegisterMessages').text('Passwords do not match!!!');
                    return false;
                }
                if (password.length < PASSWORD_CONSTRAINTS.min || password.length > PASSWORD_CONSTRAINTS.max) {
                    $('#userRegisterMessages').text('Password is too long or too short!!!');
                    return false;
                }
                return true;
            }

            function validateUserNames(firstName, lastName) {
                if (firstName == null || lastName == null
                    || firstName.length < 1 || lastName.length < 1) {
                    $('#userRegisterMessages').text('First name and lastname are mandatory!');
                    return false;
                }
                if (typeof firstName != 'string' || typeof lastName != 'string') {
                    $('#userRegisterMessages').text('First name and lastname should be text!');
                    return false;
                }
                return true;
            }


            //TODO The logout Stuff!!!
            if (currentUser) {
                //Check if user is already looged
                var currentUser = currentUser.get("username"),
                    logOutButton =$('<button>').text('Log Out'),
                    divLogOut = $('<div>');

                console.log('User already logged');
                $('#userLoginContainer').html('You are already logged in as ' + currentUser + '!If you want to logout, press the button at the right corner!');
                divLogOut.append(logOutButton);
                $('#userLoginContainer').append(divLogOut);

                logOutButton.on('click',function (){
                    Parse.User.logOut()
                    console.log('logged out');
                    location.reload();
                });


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
                            location.reload();
                            //TODO To load the add offers page
                        },
                        error: function (user, error) {
                            console.log(error.message);
                            $('#userMessages').text(error.message);
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

                    var passwordIsValid = validatePassword(password, passwordConfirm);
                    var namesAreValid = validateUserNames(firstName, lastName);
                    console.log(firstName);
                    console.log(lastName);

                    if (passwordIsValid && namesAreValid) {
                        user.set("username", userName);
                        user.set("password", password);
                        user.set("firstName", firstName);
                        user.set('lastName', lastName);
                        user.set('email', email);

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
        }
    }


}());

