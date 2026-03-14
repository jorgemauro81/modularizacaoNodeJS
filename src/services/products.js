//Function to get products by codeId
async function getByProducts(codeId, productName) {
  console.log("\n");

  console.log(`Product: ${codeId} -- ${productName}`);
}

async function getLabelName(productName) {
  console.log(`Product Name: ${productName}`);
}

module.exports = {
  getByProducts,
  getLabelName,
};
