/* function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;
    function setCallCost(callCost) {
        theCallCost = callCost;
    }

    function getCallCost() {
        return theCallCost;
    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }

    function getSmsCost() {
        return theSmsCost;
    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function makeCall() {
        if (!hasReachedCriticaLevel())
            callCostTotal += theCallCost;
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost() {
        return callCostTotal;
    }

    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function sendSms() {
        if (!hasReachedCriticaLevel())
            smsCostTotal += theSmsCost
    }

    function hasReachedCriticaLevel() {
        return getTotalCost() >= getCriticalLevel();
    }
    function totalClassName() {

        if (hasReachedCriticaLevel()) {
            return "critical";
        }
        if (getTotalCost() >= getWarningLevel()) {
            return "warning";
        }
       
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getCallCost,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName
    }
} 
function GreetingTheUSer() {
    var thenamesGreeted = "";
    var thegreetingsCounter = 0;
    var theuserName = "";
    var thelanguageType = "";
    function IncrementCounter(userName){
         theuserName = userName;
         if (!thenamesGreeted.includes(theuserName.toLowerCase())) {
                thegreetingsCounter++;
                //add an entry for the user that was greeted in the Object Map
                thenamesGreeted = thenamesGreeted.concat(theuserName.toLowerCase() + ", ");
        }
    }
    function greetingNames(){
        return thenamesGreeted;
    }
    function greetingCounter() {
        return thegreetingsCounter;
    }
    function resetCounter() {
        thenamesGreeted = "";
        thegreetingsCounter = 0;
    }
    function greetUser(language) {
        thelanguageType = language;
        if (thelanguageType == "english") {
            if (theuserName != "")
                return "Hello, " + theuserName;
            else {
           
                return "Please, enter your name";
            }
        }
        else if (thelanguageType == "afrikaans") {
            if (theuserName != "")
                return "Hallo, " +theuserName;
            else {
            
                return "Please, enter your name"
            }
        }
        else if (thelanguageType == "isiXhosa") {
            if (theuserName != "")
                return "Mholweni, " + theuserName;
            else {
                
                return "Please, enter your name"
            }
        }
    }
    return {
        IncrementCounter,
        greetingCounter,
        greetUser,
        resetCounter,
        greetingNames
    }
}*/
function RegstrationNumbers(){
    
    var regNumbers = [];
    var regByTown = [];

    function addRegistration(regNumber){
        if(!regNumbers.includes(regNumber))
            regNumbers.push(regNumber);
    }
    function AllRegNumbers(){
        return regNumbers;
    }
    function filterByTown(townsName){
        regByTown = [];
        if(townsName === "capetown")
        {
            for (let i = 0; i < regNumbers.length; i++) {
                let reg = regNumbers[i];
                if (reg.includes("CA")) {
                    regByTown.push(reg);
                }
            }
        }
        else if(townsName === "paarl")
        {
            for (let i = 0; i < regNumbers.length; i++) {
                let reg = regNumbers[i];
                if (reg.includes("CL")) {
                    regByTown.push(reg);
                }
            }
        }
        else if(townsName === "george")
        {
            for (let i = 0; i < regNumbers.length; i++) {
                let reg = regNumbers[i];
                if (reg.includes("CJ")) {
                    regByTown.push(reg);
                }
            }
        }
        else if(townsName === "stellenbosch")
        {
            for (let i = 0; i < regNumbers.length; i++) {
                let reg = regNumbers[i];
                if (reg.includes("CK")) {
                    regByTown.push(reg);
                }
            }
        }
        else
        {
            regByTown = regNumbers;
        }
        return regByTown;
    }
    function resetReg()
    {
        regNumbers  = [];
    }
    
    return {
        addRegistration,
        AllRegNumbers,
        filterByTown,
        resetReg
    }
}