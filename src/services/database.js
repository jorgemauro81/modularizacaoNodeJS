//Funcao sem exportar
async function connectTodatabase(databaseName) {}
//Função por exportacao padrao
//Adicionar o async depois do igual para ser uma exportacao de funcao assíncrona
//Assim lá na chamada da funcao no main.js, o uso do await é permitido
exports.connectTodatabaseFnc = async (databaseName) => {
  connectTodatabase("myDatabase");
};

exports.disconnectFromDatabase = async (databaseName) => {
  console.log(`Disconnected from database: ${databaseName}`);
};
