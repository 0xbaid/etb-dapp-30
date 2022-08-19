var contractABI = [];
var contractAddress = "0xB584b3C1e61260865c0F52c77aDd92B944dE26d5";

var web3 = new Web3("http://127.0.0.1:9545/");

var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);
