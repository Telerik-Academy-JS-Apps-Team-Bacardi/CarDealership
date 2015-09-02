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
                password=password + '';
                passwordConfirm=passwordConfirm + '';
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
                    loggedInAlert = $('<div/>').addClass('alert alert-info').html('You are already logged in as <strong>' + currentUser  +  '</strong>. If you want to log out press the button in the upper right corner!');
                
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

                    var passwordIsValid = validatePassword(password, passwordConfirm);
                    var namesAreValid = validateUserNames(firstName, lastName);

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
                return  {
                    validatePassword: validatePassword,
                    validateUserNames: validateUserNames
                }
            }
        }
    }


}());
