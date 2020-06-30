const fs = require("fs");


function renderizaEscolhaDePalavraPeloMestre(dados, id) {
  // const objeto = JSON.parse(dados)
  return `
  <!DOCTYPE html>
  <html>
  <head>
  </head>
  <body>
    <a href="#${dados[1].palavra}">${dados[1].palavra} = ${dados[1].definicao}</a><br>
  </body>
  </html>
  `;
}

exports.renderizaEscolhaDePalavraPeloMestre = renderizaEscolhaDePalavraPeloMestre