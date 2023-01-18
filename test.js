const Balaboba = require('./balaboba');
const balaboba = new Balaboba();

balaboba.generate('Данил Прытков пришёл',0).then(response => {
    console.log(response);
    console.log(1)
});