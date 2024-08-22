const greeting = function (name){
    return `Hi, ${name}`
}


//Arrow function - explicit return
const new_greeting = (name) => {
    return `Hi, ${name}`
}


//Arrow function - implicit return
const new_greetingImplicit = name => `Hi, ${name}`
const new_greetingImplicitWith_Parameters = (name, last_name) => `Hi, I'm  ${name} ${last_name}`

//Lexical binding

const functionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: message => { 
        console.log(`${this.name} says: ${message}`)
    }
}

functionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility')
functionalCharacter.messageWithArrowFunction('Beware of doctor Octopus.')
