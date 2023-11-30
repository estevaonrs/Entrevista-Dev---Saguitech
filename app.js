function emitirNotaFiscal() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const valorServico = parseFloat(document.getElementById('valorServico').value);
    const imposto = valorServico * 0.1;

    const notaFiscal = `
        <p><strong>Nome do Cliente:</strong> ${nomeCliente}</p>
        <p><strong>Valor do Serviço:</strong> R$ ${valorServico.toFixed(2)}</p>
        <p><strong>Imposto (10%):</strong> R$ ${imposto.toFixed(2)}</p>
        <hr>
        <p><strong>Total:</strong> R$ ${(valorServico + imposto).toFixed(2)}</p>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscal;
}
