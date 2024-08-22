const greeting = function (name){
    return `Hi, ${name}`
}


//Arrow function - explicit return
const newgreeting = (name) => {
    return `Hi, ${name}`
}


//Arrow function - implicit return
const newgreetingImplicit = name => `Hi, ${name}`
const newgreetingImplicitWithParametres = (name, lastname) => `Hi, I'm  ${name} ${lastname}`

//Lexical binding

const finctionalCharacter = {
    name: 'Incle Ben',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: message => { 
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With reat power comes great responsability.')
finctionalCharacter.messageWithArrowFunction('Beware of doctor Octopus.')
