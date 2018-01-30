const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();
	
poloniex.returnTicker().then((ticker) => {
  console.log(ticker);
}).catch((err) => {
  console.log(err.message);
});