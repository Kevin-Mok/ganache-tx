import Web3 from "web3";
import { Transaction } from "@ethereumjs/tx";
import { Common } from "@ethereumjs/common";

export const getWeb3 = () => {
  const url = "http://127.0.0.1:8545";
  const provider = new Web3.providers.HttpProvider(url);
  return new Web3(provider);
};

const web3 = getWeb3();
const privateKey =
  "0xe8ee08a685d093206043f7274958f3a51944ce0b49393d20fd9fed2d0585077b";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

const deploy = async () => {
  const txnCount = await web3.eth.getTransactionCount(account.address);
  console.log(account.address)
  const balance = await web3.eth.getBalance(account.address);
  console.log(balance)
  const rawTxOptions = {
    nonce: web3.utils.numberToHex(txnCount),
    from: account.address,
    to: "0x78c1BdCDcCc8f6C75a903A9177422C51c89a8b96", //public tx
    value: "0x00",
    chainId: "1337",
    gasPrice: "0xBA43B7400", //ETH per unit of gas
    gasLimit: "0x1AB3F00", //max number of gas units the tx is allowed to use
  };
  const common = Common.custom(
    {
      chainId: 1337,
      defaultHardfork: "shanghai",
    },
    { baseChain: "mainnet" }
  );

  console.log("Creating transaction...");
  const tx = new Transaction(rawTxOptions, { common });
  console.log("Signing transaction...");
  const signed = tx.sign(Buffer.from(privateKey.slice(2), "hex"));
  console.log("Serializing transaction...");
  var serializedTx = signed.serialize();
  console.log("Sending transaction...");
  const pTx = await web3.eth.sendSignedTransaction(
    "0x" + serializedTx.toString("hex").toString("hex")
  );
  console.log("tx transactionHash: " + pTx.transactionHash);
};

deploy();
