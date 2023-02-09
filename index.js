const prompt = require('prompt-sync')
const comando = prompt()

const propiedadecss = (input) => {
    let output = []
    while (input != "sair") {
        output.push(input);
        input = comando("Insira uma propriedade CSS:")
    }
        
    let resultado = output.sort().join("\n")
    console.log(resultado)
    
}
propiedadecss()