// Código Y que chama a API para executar o Código X
async function executarCodigoX() {
    const a = 5;
    const b = 10;
    const response = await fetch(`/api/codigo_x?a=${a}&b=${b}`);
    const data = await response.json();
    console.log('Resultado:', data.resultado);
}

executarCodigoX();