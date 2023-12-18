//Biblioteca numero
//Modo utiliza export

export function sum(num1, num2) {
    return num1 + num2;
}

export function exp(base, exponent) {
    return base ** exponent;
}

export function round(value, precision) {
    var multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}


//caso não queira utilizar o export
//pode selecionar somente que deve ser exportado
// export { sum, round };

// export { sum, round };