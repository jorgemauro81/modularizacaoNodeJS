//Funcao sem exportar
async function connectTodatabase(databaseName) {}
//Função por exportacao padrao
exports.connectTodatabaseFnc = (databaseName) => {
  connectTodatabase("myDatabase");
};

exports.disconnectFromDatabase = (databaseName) => {
  console.log(`Disconnected from database: ${databaseName}`);
};
