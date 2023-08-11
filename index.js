
function introduction(name = 'Aki') {
return `Hi, my name is ${name}.`
}
function logTwoValues(value1 = 2, value2 = 3) {
    console.log(`The two values are ${value1} and ${value2}.`);

}

function introductionWithLanguage(name = 'Aki', language = 'Ember.js') {
return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name = 'Gracie', language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
}
