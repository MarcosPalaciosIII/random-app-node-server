const cardSuites1 = ['H', 'C', "D", "S"]
const cardValues1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']


const randomNumber = maxLimitNumber => Math.floor(Math.random() * maxLimitNumber);



const cardSuitesOptions = [cardSuites1]
const cardValuesOptions = [cardValues1]
const cardSuiteValuePairing = {
    standardCards: {
        suiteArray: cardSuites1,
        valuesArray: cardValues1
    }
}