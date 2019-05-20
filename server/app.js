const fs = require("fs");
const express = require('express'),
  app = express();

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 3-4 linhas de código (você deve usar o módulo de filesystem (fs))

let rawdata = fs.readFileSync("server/data/jogadores.json");  
let data = JSON.parse(rawdata);  

let rawGameData = fs.readFileSync("server/data/jogosPorJogador.json");  
let gameData = JSON.parse(rawGameData);


// configurar qual templating engine usar. Sugestão: hbs (handlebars)
app.set('view engine', 'hbs');


// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json
app.set("views", "server/views");

app.get("/", function (req, res) {
  res.render("index.hbs", data);
});

// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter umas 15 linhas de código


// EXERCÍCIO 1
// configurar para servir os arquivos estáticos da pasta "client"
app.use(express.static("client/"));

// abrir servidor na porta 3000
let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});