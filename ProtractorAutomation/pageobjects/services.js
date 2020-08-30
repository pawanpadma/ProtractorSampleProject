

var servicesp = {
    myservices: function () {
        var flipper = element(by.css("flipper[ng-click*='flipCards.toggleCard(0)'] div[class='flipper'] div[class*='front']"));
        var questions = element(by.xpath("//div[@class='flipper flipped']//div[text()='Questions']"));
        var questionName = element(by.model("askQuestion.newQuestion.Subject"));
        element(by.linkText("Menu")).click();
        element(by.linkText("My Account")).click();
        element(by.linkText("My Services")).click();
        element(by.xpath("(//span[text()='My Services'])[2]")).isPresent().then(function (heading) {
            expect(heading).toBeTruthy();

        });

    }
};

module.exports = servicesp;

