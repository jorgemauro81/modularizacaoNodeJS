const p = require("./services/products");
const config = require("./services/config");
async function main() {
  console.log("Hello, my name is system");
  p.getByProducts(1, "Notebook");
  p.getByProducts(2, "Smartphone");

  p.getLabelName("Notebook");

  console.log(`Version: ${config.version}`);
  console.log(`Production: ${config.production}`);
}

main();
