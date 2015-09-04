/**
 * Created by name on 1.9.2015 ã..
 */
(function () {

    describe('Testing password validation', function () {
        it('expects to return false if passwords do not match', function () {
            expect(validator.validatePassword('pass', 'pass2')).to.be.false;
        });
        it('expects to return false if password is too long', function () {
            expect(validator.validatePassword('3213213123132131232132131231321312', '3213213123132131232132131231321312')).to.be.false;
        });
        it('expects to return false if password is too short /testing ints/', function () {
            expect(validator.validatePassword(2, 2)).to.be.false;
        });
        it('expects to return false if password is too short /testing strings/', function () {
            expect(validator.validatePassword('2', '2')).to.be.false;
        })
    });

    describe('Testing first name and last name /user data/', function () {
        it('expects to return false if first or last name are not a string', function () {
            expect(validator.validateUserNames(2, 'kolio')).to.be.false;
        });
        it('expects to return false if first name or last name is missing', function () {
            expect(validator.validateUserNames('kolio')).to.be.false;
        });
        it('expects to return true if given two strings', function () {
            expect(validator.validateUserNames('kolcho', 'koliov')).to.be.true;
        });
    });

     describe('Testing email - user registration', function () {
         Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV");

        it('expects email to have @', function () {
           expect(validator.validateUserEmail('kolio')).to.be.false;
        });
        it('expects email to have symbols between @ and the domain', function () {
           expect(validator.validateUserEmail('kolio@.bg')).to.be.false;
        });
         it('expects email to have domain', function () {
           expect(validator.validateUserEmail('kolio@gmail')).to.be.false;
        });
         it ('expects email with valid domain and @ to pass', function (){
             expect(validator.validateUserEmail('kolio23@abv.bg')).to.be.true;
         });

    });


    describe('User sign in', function () {
        Parse.initialize("BxC62zFfCXJAfLxS90r6hwNSz0OIKtDlZ1sVeCCV", "Av5f9x57L6qsWpxohLSaXtqUD32Pblzm4dyUnYaJ");

        it('expects registered user to be able to log in', function () {
            Parse.User.logIn('test', 'test');
            var currentUser = Parse.User.current();

            expect(currentUser).not.to.be.undefined;
        });
        it('expects random user not to be able to log in', function () {
            var userName = Math.random();
            var password = Math.random();
            Parse.User.logOut();
            Parse.User.logIn(userName, password);
            var currentUser = Parse.User.current();

            expect(currentUser).to.be.null;
        })

    });


}());
