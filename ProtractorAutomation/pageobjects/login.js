var data=require('../data.json');
    var loginp = {
        loginToAPP: function () {
            console.log("In login method");
            var username = element(by.model("login.user.email"));
            var password = element(by.model("login.user.password"));
            var loginBtn = element(by.xpath("//button[@value='login.value']"));
            username.sendKeys(data.loginPage.userName);
            password.sendKeys('gmail@1');
            console.log("In login method1");
        loginBtn.click();
    }
};

module.exports = loginp;

    


