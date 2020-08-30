
 var homep = {
    
   
    selectLocation: function () {
       
        var billTo = element(by.exactRepeater("locationSelect-module"));
        var location = element(by.className("location-selection"));
       
        
        browser.getTitle().then(function (title) {
            console.log("title is   " + title);
            expect(title).toBe("Portal");
        });
        billTo.isPresent().then(function (ele) {
            console.log("value of present is   " + ele);
            if (ele) {
                console.log("bill to is available " + ele);
                billTo.click();
            }
            else {
                console.log("value not there");
            }
        });
        browser.getTitle().then(function (title) {
            console.log("title is   " + title);
        });
        location.isPresent().then(function (ele) {
            console.log("value of present is   " + ele);
            if (ele) {
                console.log("value of present is  1 " + ele);
                location.click();
            }
            else {
                console.log("value not there");
            }
        });
      //  location.click();
        browser.getTitle().then(function (title) {
            console.log("title is   " + title);
        });

      
    },
    checkBalance: function () {
        var balance = element(by.xpath("//div[@class='flipper']//div[contains(@class,'p1-new')]"));
        balance.getText().then(function (bal) {
           // selectLocation.glob = bal.value;
            expect(bal).toBe("$-5,883.00");
        });
    },
    
    

};

module.exports = homep;
