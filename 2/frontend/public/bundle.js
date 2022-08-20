var contractABI = [
  {
    constant: true,
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];
var contractAddress = "0xB584b3C1e61260865c0F52c77aDd92B944dE26d5";

var web3 = new Web3("http://127.0.0.1:9545/");

var helloWorldContract = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener("DOMContentLoaded", () => {
  helloWorldContract.methods
    .hello()
    .call()
    .then((result) => {
      document.getElementById("hello").innerHTML = result;
    });
});
