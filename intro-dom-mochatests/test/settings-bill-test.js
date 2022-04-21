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

    it("should be able to count how many times the same name has been greeted", function(){
        let greeting = GreetingTheUSer();

       greeting.IncrementCounter("Thabo"); 
        assert.equal(1, greeting.greetingCounter());
    });
    it("should be able to greet a person and counter should be 1", function(){
        let greeting = GreetingTheUSer();

        greeting.IncrementCounter("Thabo");
        assert.equal(1, greeting.greetingCounter());
    });

    it("the counter should not increment when the same person is greeted 3 times", function(){
        let greeting = GreetingTheUSer();

        greeting.IncrementCounter("Thabo");
        greeting.IncrementCounter("Thabo");
        greeting.IncrementCounter("Thabo");
        assert.equal(1, greeting.greetingCounter());
    });

    it("counter should be able to count how many times 3 diferent people have been greeted ", function(){
        let greeting = GreetingTheUSer();

        greeting.IncrementCounter("Thabo");
        greeting.IncrementCounter("Teboho");
        greeting.IncrementCounter("Lerato");
        assert.equal(3, greeting.greetingCounter());

    });

    it("couter should be able to count how many times 2 different people ", function(){
        let greeting = GreetingTheUSer();

        greeting.IncrementCounter("Thabo");
        greeting.IncrementCounter("Teboho");
        greeting.IncrementCounter("Thabo");
        greeting.IncrementCounter("Teboho");
        greeting.IncrementCounter("Thabo");
        greeting.IncrementCounter("Teboho");
        assert.equal(2, greeting.greetingCounter());

    });
    it(" counter should be zero when no name is entered", function(){
        let greeting = GreetingTheUSer();
        assert.equal(0, greeting.greetingCounter());

    });
});
describe("Displaying greeting message", function(){
    it("it should display greeting message according to selected language", function(){
        let greeting = GreetingTheUSer();

        greeting.IncrementCounter("Thabo");
        assert.equal("Hello, Thabo", greeting.greetUser("english"));
        greeting.IncrementCounter("Thabo");
        assert.equal("Hallo, Thabo", greeting.greetUser("afrikaans"));
        greeting.IncrementCounter("Thabo");
        assert.equal( "Mholweni, Thabo", greeting.greetUser("isiXhosa"));
    })
    it("it should display greeting message for Teboho in English", function(){
        let greeting = GreetingTheUSer();

        greeting.IncrementCounter("Teboho");
        assert.equal("Hello, Teboho", greeting.greetUser("english"));

    })

    it("it should display greeting message for John in Afrikaans", function(){
        let greeting = GreetingTheUSer();
        greeting.IncrementCounter("John");
        assert.equal("Hallo, John", greeting.greetUser("afrikaans"));

    })

    it("it should display greeting message for Xoli in isiXhosa", function(){
        let greeting = GreetingTheUSer();
        greeting.IncrementCounter("Xoli");
        assert.equal("Mholweni, Xoli", greeting.greetUser("isiXhosa"));

    })
});
describe("Reset", function(){
    it("it should be able to reset the counter to zero", function(){
        let greeting = GreetingTheUSer();
        
        greeting.resetCounter();
        assert.equal(0, greeting.greetingCounter());
    })
    it("it should be able to reset the names of people greeted", function(){
        let greeting = GreetingTheUSer();
        
        greeting.resetCounter();
        assert.equal("", greeting.greetingNames());
    })
});