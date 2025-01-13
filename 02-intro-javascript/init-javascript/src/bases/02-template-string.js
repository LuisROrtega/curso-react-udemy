// Template String

const name = 'Template';
const lastName = 'String';

const fullName = `${name} ${lastName}`;

console.log(fullName);

// Template String function

function getGreeting() {
    return 'Hola ';
}

console.log(`${getGreeting()} ${name}`);