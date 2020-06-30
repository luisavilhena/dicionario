const http = require("http");
const server = http.createServer();
const url = require("url");
const renderizaFuncoes = require("./funcoes/renderizaFuncoes");
const fs = require("fs");


server.on("request", (request, response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  const parsedUrl = url.parse(request.url, true);

  if (request.url === "/favicon.ico") {
    response.end(null);''
    return;
  }
  if (parsedUrl.pathname == "/jogo") {
    const caminhoDoArquivo = __dirname + "/dicionario/palavras/palavras.json"
    const lerArquivoPalavras = fs.readFileSync(caminhoDoArquivo, "utf8")
    const parseArquivoPalavras = JSON.parse(lerArquivoPalavras)

    //quantos objetos têm
    const numeroDePalavras = parseArquivoPalavras.length
    //pegar o número dos objetos e escolher randomicamente 3 números.
      //->escolher randomicamente um número
      //PERGUNTA -----> por quê não funciona essa função?
    // function numeroRandomico(numeroDePalavras) {
    //   Math.floor(Math.random() * numeroDePalavras + 1)
    // }
    // console.log(numeroRandomico(numeroDePalavras))
    // console.log(numeroDePalavras)

    let ListaDeNumeroTripla = "";

    for(var i = 0; i<=2; i++) {
      let randomizarId = Math.floor(Math.random() * numeroDePalavras + 1)
    
      //Se randomizarId estiver em listaDeNumeroTripla, randomizar outro número
      while (ListaDeNumeroTripla.includes(randomizarId)) {
        randomizarId;
      }
      ListaDeNumeroTripla = randomizarId + ListaDeNumeroTripla
      
      i = i++;
      ListaDeNumeroTripla;
    }
    console.log(ListaDeNumeroTripla)
    const arrayCom3Ids = Array.from(ListaDeNumeroTripla)
    //fazer um foreach para que os 3 ids apareçam
    let htmlComTodasAsEScolhasdePalavrasPeloMestre = ''
    arrayCom3Ids.forEach(function(x){
      let criarHtml = renderizaFuncoes.renderizaEscolhaDePalavraPeloMestre(parseArquivoPalavras, x)
      htmlComTodasAsEScolhasdePalavrasPeloMestre = htmlComTodasAsEScolhasdePalavrasPeloMestre + criarHtml
    })

    response.end(htmlComTodasAsEScolhasdePalavrasPeloMestre)

  }

  // response.end(renderizaFuncoes.renderizaEscolhaDePalavraPeloMestre(parseArquivoPalavras))
  if(parsedUrl.pathname =="/jogo2") {
    console.log('oi')
  }
  
});

server.listen(8000);