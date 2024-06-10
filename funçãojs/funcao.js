function combinacoesUnicas(letra1, letra2, letra3) {
    const combinacoes = [];
    
    // Adiciona todas as combinações possíveis
    combinacoes.push(letra1 + letra2 + letra3);
    combinacoes.push(letra1 + letra3 + letra2);
    combinacoes.push(letra2 + letra1 + letra3);
    combinacoes.push(letra2 + letra3 + letra1);
    combinacoes.push(letra3 + letra1 + letra2);
    combinacoes.push(letra3 + letra2 + letra1);
    
    const combinacoesUnicas = combinacoes.filter((combinacao, index) => combinacoes.indexOf(combinacao) === index);
    
    return combinacoesUnicas;
}

// Exemplo de uso:
const resultado = combinacoesUnicas('a', 'b', 'c');
console.log(resultado);