
      describe("my first portal project", function () {
      var login = require("../pageobjects/login.js");
      var home = require("../pageobjects/home.js");
      var question = require("../pageobjects/question.js");
      var service = require("../pageobjects/services.js");
        
        beforeAll(function () {
          browser.waitForAngularEnabled(true);
            browser.driver.get("http://dev-portal.workwave.io/");
            console.log("URL invoked  ");
           
            browser.driver.manage().window().maximize();
           
            login.loginToAPP();
        });
        it("first program", function () {
            console.log("first prg");
            home.selectLocation();
          //  home.checkBalance1();
        });

        it("validate balance", function () {
            home.checkBalance();
        });

        it("Submit question", function () {
            question.askaquestion().then(function (heading) {
                console.log(heading, "***");
                //expect(heading).toBeTruthy();
              expect(heading).toBe("filter")
            }).catch(function (error) {
                console.log(error.message);
                expect(true).toBe(false);
            });
           
           

        });

        it("validate my services", function () {
            service.myservices();
            
        });
    });

