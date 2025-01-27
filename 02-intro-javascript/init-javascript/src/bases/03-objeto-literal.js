const human = {
    name: 'Luis',
    lastName: 'Ortega',
    age: 23,
    getFullName() {
        return 'Nombre Completo: \n' + this.name + ' ' + this.lastName;
    },
    address: {
        street: 'Calle 123',
        number: 123,
        city: 'Aguascalientes',
        country: 'México',
    },
    getAddress() {
        return 'Datos de Ubicación: \n' +
            + 'Calle: ' + this.address.street + '\n'
            + 'Número: ' + this.address.number + '\n'
            + 'Ciudad: ' + this.address.city + '\n'
            + 'País: ' + this.address.country
    }
}



const human2 = {...human};
human2.name = 'Chicha';
human2.lastName = 'Ortega';

console.log(human.getFullName() + '\n');
console.log(human2.getFullName());