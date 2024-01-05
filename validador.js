//705.484.450-52 || 070.987.720-03

// 7x 0x 5x 4x 8x 4x 4x 5x 0x numeros do CPF
// 10 9  8  7  6  5  4  3  2  sequencia  regreciva
// 70 0  40 28 48 20 16 15 0 = 237 resultado

// 11 - (237 % 11) = 5 ( primeiro digito) n pode ser maior que 9 se sim = 0

// 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x numeros do CPF
// 11 10 9  8  7  6  5  4  3  2 sequencia regrecisva
// 77  0 45 32 56 24 20 20 0  10 = 284

// 11 - (284 % 11) = 2 ( segundo digito)

// concatenar os digitos e comparar com o cpf original

let cpf = "705.484.450-52";
validaCpf(cpf);
function validaCpf(cpf) {
    let cpflimpo = cpf.replace(/\D+/g, ''); // (/\D+/g) = expressão matematica para um não número  
    var arrCpf = (Array.from(cpflimpo)).map(i => Number(i));
    console.log(arrCpf);
}
