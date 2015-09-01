
var loginNavBar = (function () {

    Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "Av5f9x57L6qsWpxohLSaXtqUD32Pblzm4dyUnYaJ");

    var addedUser = Parse.User.current();
    if (!addedUser) {
        var liUserName = $('<li>');
        liUserName.css('float', 'left');
        liUserName.css('padding', '15px');
        liUserName.css('margin-left', '100px');
        liUserName.css('width', '100px');
        liUserName.css('height', '30px');
        liUserName.append('<input type="text" placeholder="UserName" id="userNameNavBar">');
        $('.navbar-nav').append(liUserName);

        var liPassword = $('<li>');
        liPassword.css('float', 'left');
        liPassword.css('padding', '15px');
        liPassword.css('margin-left', '80px');
        liPassword.css('width', '100px');
        liPassword.css('height', '30px');
        liPassword.append('<input type="password" placeholder="password" id="passwordNavBar">');
        $('.navbar-nav').append(liPassword);

        var liButton = $('<li>');
        liButton.css('float', 'left');
        liButton.css('padding', '15px');
        liButton.css('margin-left', '80px');
        liButton.css('width', '100px');
        liButton.css('height', '30px');
        liButton.append('<button id="buttonLoginNavBar">Login</button>');
        $('.navbar-nav').append(liButton);

        $('#buttonLoginNavBar').on('click', function () {
            var userName = $('#userNameNavBar').val(),
                password = $('#passwordNavBar').val();

            Parse.User.logIn(userName, password, {
                success: function (user) {
                    console.log('User Logged');
                    location.reload();
                },
                error: function (user, error) {
                    console.log(error.message);
                    window.alert('Invalid username or password');
                }
            });
        })


    }
}());
