describe("Login window", function(){
  var loginButton, loginField, APITokenField;

  beforeEach(function(){
    loginField = window.textFields()['LoginField'];
    APITokenField = window.textFields()['APITokenField'];
    loginButton = window.buttons()['Login'];
  });

  it("has two text fields", function(){
    expect(window.textFields().length).toEqual(2);
  });

  it("has a login field", function(){
    expect(loginField).toExist();
  });

  it("has an api token field", function(){
    expect(APITokenField).toExist();
  });

  it("has a Login button", function(){
    expect(loginButton).toExist();
  });

  describe("pressing the Login button", function(){
    describe("when the login and API token fields are empty", function(){
      beforeEach(function(){
        loginField.setValue('');
        APITokenField.setValue('');
      });

      it("notifies you of authentication failure", function(){
        target.onAlert = function(alert) {
          expect(alert.name()).toEqual("Authentication failed");
        }
        loginButton.tap();
      });
    });

    describe("when the login field is empty", function(){
      beforeEach(function(){
        loginField.setValue('');
        APITokenField.setValue(authToken);
      });

      it("notifies you of authentication failure", function(){
        target.onAlert = function(alert) {
          expect(alert.name()).toEqual("Authentication failed");
        }
        loginButton.tap();
      });
    });

    describe("when the API token field is empty", function(){
      beforeEach(function(){
        loginField.setValue(authLogin);
        APITokenField.setValue('');
      });

      it("notifies you of authentication failure", function(){
        target.onAlert = function(alert) {
          expect(alert.name()).toEqual("Authentication failed");
        }
        loginButton.tap();
      });
    });

    describe("when invalid credentials are given", function(){
      beforeEach(function(){
        loginField.setValue('crazylogin');
        APITokenField.setValue('crazypassword');
      });

      it("notifies you of authentication failure", function(){
        target.onAlert = function(alert) {
          expect(alert.name()).toEqual("Authentication failed");
        }
        loginButton.tap();
      });
    });

    describe("when valid credentials are given", function(){
      beforeEach(function(){
        loginField.setValue(authLogin);
        APITokenField.setValue(authToken);
        loginButton.tap();
      });

      it("shows you your recent activity", function(){
        window.logElementTree();
        expect(window.navigationBar().name()).toEqual("Repositories");
      });
    });
  });
});
