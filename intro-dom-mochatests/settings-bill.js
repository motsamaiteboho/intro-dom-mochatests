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
} */
function GreetingTheUSer() {
    var thenamesGreeted = {};
    var thegreetingsCounter = 0;
    var theuserName = " ";
    var thelanguageType;

    function setName(userName) {
        theuserName = userName;
        if (thenamesGreeted[theuserName] === undefined) {
            thegreetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            thenamesGreeted[userName] = 0;
            //update the DOM to display the counter
        }
    } 
    function setLanguage(language) {
        thelanguageType = language;
    }
    function getName() {
        return theuserName;
    }
    function getLanguage() {
        return thelanguageType;
    }

    function greetingCounter()
    {
        return thegreetingsCounter;
    }

    function greetUser(){

        if(thelanguageType == "english" )
        {
            return "Hello, " + getName(); 
        }
        else if(thelanguageType == "afrikaans"){
            return "Hallo, " + getName(); 
        }
        else if(thelanguageType == "isiXhosa"){
            return "Mholweni, " + getName(); 
        }
    }
    return {
        setName,
        setLanguage,
        getName,
        getLanguage,
        greetingCounter,
        greetUser
    }
}