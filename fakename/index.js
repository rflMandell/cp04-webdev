const first = [
    'Marcelo', 'Rafael', 'Luis', 'Felipe', 'Luigi', 'Antonio', 'Joao', 'Roberta', 'Ana'
];
const last = [
    'Mandel', 'Thiengo', 'Lima', 'Crivellaro', 'Amorim', 'Pires', 'Prado', 'Cruz'
];

function gerarNomeFake() {
    let firstName = first[Math.floor(Math.random() * first.length)];
    let lastName = last[Math.floor(Math.random() * last.length)];
    return `${firstName} ${lastName}`;
}

module.exports = { gerarNomeFake };