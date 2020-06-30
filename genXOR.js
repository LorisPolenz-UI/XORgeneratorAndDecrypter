/*
Author: Loris Polenz
CreatedAt: 30.06.2020

How to use: 

1. to use the project you need nodejs (https://nodejs.org)
2. when nodejs install run  "npm i --save binary-code" to get the text2binary and binary2text extension
3. insert key and message => make sure both are in binary the same length
4. run "node .\genXOR.js" in the terminal (same directory)
5. Outputs :
  Message: the message you insertet in binary
  XOR-CodeTxt: the encrypted code in text (most of the time like  this => "ñûøù" )
  XOR-Code: The encrypted binary code
*/

const bin = require("binary-code"); //import text2binary and binary2text extension

key = bin.binary("lerk"); //key => insert key here
msg = bin.binary("baum"); //message to create XOR-Code => insert message here

console.log("Message: " + msg); //Output: word to create in binary

//get lenght of elements
var keyL = key.length;
var msgL = msg.length;

//check if key and message have the same lenght in binary if not its not workling
if (keyL == msgL) {
  var arrRes = ""; //stores result

  //runds code for every bit in key and message
  for (i = 0; i < key.length; i++) {
    var arrCalc = msg[i] + key[i]; //creates number who is either 01, 10, 00 or 11

    //if condition is true when arrCalc either is 10 or 01
    if (arrCalc == 10 || arrCalc == 01) {
      arrRes = arrRes + 0; //after XOR rule value has to be 0
    } else {
      arrRes = arrRes + 1; //after XOR rule value has to be 1
    }
  }

  var XOR2txt = bin.text(arrRes); //convert binary XOR Code to text
  console.log("XOR-CodeTxt = " + XOR2txt);
  console.log("XOR-Code = " + arrRes);
} else {
  console.log("Key and Message has not the same lenght in Binary"); //message if key and message are not same length
}
