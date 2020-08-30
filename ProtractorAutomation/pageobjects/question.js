
var questionsp = {
    askaquestion: function () {
        return new Promise(function (resolve, reject) {
            var flipper = element(by.css("flipper[ng-click*='flipCards.toggleCard(0)'] div[class='flipper'] div[class*='front']"));
            var questions = element(by.xpath("//div[@class='flipper flipped']//div[text()='Questions']"));
            var questionName = element(by.model("askQuestion.newQuestion.Subject"));

            flipper.click().then(function () {
                browser.driver.sleep(2000);
                browser.actions().click(questions).perform();
                browser.driver.sleep(2000);
                questionName.sendKeys("test");
                element(by.model("askQuestion.newQuestion.Question")).sendKeys("test");
                element(by.xpath("//label[text()='Phone']")).click();
                element(by.css("button[value='askQuestion.value']")).click();
                return element(by.css("div[class='pull-left p2-new']"));
            }).then(function (element) {
                return element.getText();
            }).catch(function () {
                    reject();
            });
        });
    }

};

module.exports = questionsp;