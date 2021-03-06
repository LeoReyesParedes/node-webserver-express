const hbs = require('hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((element, index) => {
        palabras[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    });

    return palabras.join(' ')
})