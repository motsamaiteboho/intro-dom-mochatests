/* describe("The factory function", function(){
    it("should be able to set the call cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());
    });

    it("should be able to set the sms cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost());
    });

    it("should be able to set the sms and call cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);

        assert.equal(0.85, settingsBill.getSmsCost());
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill.setCallCost(1.75);
        settingsBill.setSmsCost(0.65);
        
        assert.equal(0.65, settingsBill.getSmsCost());
        assert.equal(1.75, settingsBill.getCallCost());
    });

    it("should be able to set the warning level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(20);

        assert.equal(20, settingsBill.getWarningLevel());
    });

    it("should be able to set the warning level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(20);

        assert.equal(20, settingsBill.getWarningLevel());
    });

    it("should be able to set the warning and critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(15);
        settingsBill.setCriticalLevel(25);

        assert.equal(15, settingsBill.getWarningLevel());
        assert.equal(25, settingsBill.getCriticalLevel());
    });
});

describe("use values", function(){
    it("should be able to use the call cost set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75, settingsBill.getTotalCost());
        assert.equal(6.75, settingsBill.getTotalCallCost());
        assert.equal(0, settingsBill.getTotalSmsCost());

    });

    it("should be able to use the call cost set for 2 calls at 1.35 each", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(2.70, settingsBill.getTotalCost());
        assert.equal(2.70, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());

    });

    it("should be able to use 2 sms's at 0.85 each", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal(1.70, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(1.70, settingsBill.getTotalSmsCost());

    });

    it("should be able to use 2 sms's at 0.85 each and make 1 call at 1.35", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.makeCall();

        assert.equal(3.05, settingsBill.getTotalCost());
        assert.equal(1.35, settingsBill.getTotalCallCost());
        assert.equal(1.70, settingsBill.getTotalSmsCost());

    });
});
describe("warning and crital level", function(){
    it("it should return a class name of 'warning' if warning level is reached", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("warning", settingsBill.totalClassName());
    })
    it("it should return a class name of 'critical' if critical level is reached", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("critical", settingsBill.totalClassName());
    })

    it("it should stop the totaL call cost from increasing when critical level is reached", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.5);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("critical", settingsBill.totalClassName());
        assert(10,settingsBill.getTotalCallCost());
    })

    it("it should allow the total to increase after critical level has been updated to a new critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.5);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(8);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("critical", settingsBill.totalClassName());
        assert(10,settingsBill.getTotalCallCost());

        settingsBill.setCriticalLevel(20);

        assert.equal("warning", settingsBill.totalClassName());
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert(15,settingsBill.getTotalCallCost());
    })
}); */
describe("The greeting factory function", function(){
    it("should be able to set the name", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        assert.equal("Thabo",greeting.getName());

        greeting.setName("Teboho");
        assert.equal("Teboho",greeting.getName());
    });

    it("should be able to set the language ", function(){
        let greeting = GreetingTheUSer();

        greeting.setLanguage("english");
        assert.equal("english",greeting.getLanguage());

        greeting.setLanguage("afrikaans");
        assert.equal("afrikaans",greeting.getLanguage());

        greeting.setLanguage("isiXhosa");
        assert.equal("isiXhosa",greeting.getLanguage());
    });
   
});

describe("use values", function(){
    it("should be able to use the name", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        assert.equal(1, greeting.greetingCounter());
    });
    it("should be able to greet a person and counter should be 1", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        assert.equal(1, greeting.greetingCounter());
    });

    it("should be able to greet the same person 3 times and counter should remain 1", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        greeting.setName("Thabo");
        greeting.setName("Thabo");
        assert.equal(1, greeting.greetingCounter());
    });

    it("should be able to greet 3 diferent people and conter should be 3 ", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        greeting.setName("Teboho");
        greeting.setName("Lerato");
        assert.equal(3, greeting.greetingCounter());

    });

    it("should be able to greet 2 different people 4 times and counter should be 2", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        greeting.setName("Teboho");
        greeting.setName("Thabo");
        greeting.setName("Teboho");
        greeting.setName("Thabo");
        greeting.setName("Teboho");
        assert.equal(2, greeting.greetingCounter());

    });
    it("should be able to remain 0 if no name is enterd", function(){
        let greeting = GreetingTheUSer();
        assert.equal(0, greeting.greetingCounter());

    });
});
describe("Displaying greeting message", function(){
    it("it should display greeting message according to selected language", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        greeting.setLanguage("english")
        assert.equal("Hello, Thabo", greeting.greetUser());
        greeting.setName("Thabo");
        greeting.setLanguage("afrikaans")
        assert.equal("Hallo, Thabo", greeting.greetUser());
        greeting.setName("Thabo");
        greeting.setLanguage("isiXhosa")
        assert.equal( "Mholweni, Thabo", greeting.greetUser());
    })
    it("it should display greeting message for Teboho in English", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Teboho");
        greeting.setLanguage("english")
        assert.equal("Hello, Teboho", greeting.greetUser());

    })

    it("it should display greeting message for John in Afrikaans", function(){
        let greeting = GreetingTheUSer();
        greeting.setName("John");
        greeting.setLanguage("afrikaans")
        assert.equal("Hallo, John", greeting.greetUser());

    })

    it("it should display greeting message for Xoli in isiXhosa", function(){
        let greeting = GreetingTheUSer();
        greeting.setName("Xoli");
        greeting.setLanguage("isiXhosa")
        assert.equal("Mholweni, Xoli", greeting.greetUser());

    })
});