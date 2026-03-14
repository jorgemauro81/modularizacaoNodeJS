const p = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");
async function main() {
  console.log("Hello, my name is system");
  p.getByProducts(1, "Notebook");
  p.getByProducts(2, "Smartphone");

  p.getLabelName("Notebook");

  console.log(`Version: ${config.version}`);
  console.log(`Production: ${config.production}`);

  database.connectTodatabaseFnc("myDatabase");
  database.disconnectFromDatabase("myDatabase");
}

main();
