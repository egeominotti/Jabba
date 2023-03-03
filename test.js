// https://www.npmjs.com/package/node-mexc-api
const Mexc = require("node-mexc-api").default;
require("dotenv").config();

const mexc = new Mexc({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.SECRET_KEY,
});

console.log(mexc);

async function main() {
  const req = await mexc.spot.ticker({ symbol: "ZYB_USDC" });
  console.log(req.data[0].last);
}

main();

setInterval(main, 1000);
