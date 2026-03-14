//Function to get products by codeId
async function getByProducts(codeId, productName) {
  console.log(`Product: ${codeId} -- ${productName}`);
  await doBreakLine();
}

async function getLabelName(productName) {
  console.log(`Product Name: ${productName}`);
}
//Hidden function to break line - escondia para outros arquivos
async function doBreakLine() {
  console.log("\n");
}

module.exports = {
  getByProducts,
  getLabelName,
};
