/*
Author: Loris Polenz
CreatedAt: 30.06.2020

How to use: 

1. how to get nodejs and the text2binary and binary2text extension is explained in "genXOR.js"
2. insert key and XOR-Code => make sure both are in binary and  the same length
3. run "node .\decXOR.js" in the terminal (same directory)
4. Outputs :
    DecodedTxt: the value in plain text you entered befor encrypting in other file
    Decoded: the binary value you entered before encypting in other file
*/

const bin = require("binary-code"); //import text2binary and binary2text extension

key = bin.binary("lerk"); //key => insert same key as in other file
var XOR = "11110001111110111111100011111001"; //XOR code in binary

//get lenght of elements
var keyL = key.length;
var XORL = XOR.length;

//check if key and XOR-Code have the same lenght in binary if not its not workling
if (keyL == XORL) {
  arrayXOR = XOR.split(""); //creates array out of sting

  var arrRes = ""; //stores result
  //runds code for every bit in key and message
  for (i = 0; i < key.length; i++) {
    var arrCalc = arrayXOR[i] + key[i]; //creates number who is either 01, 10, 00 or 11

    //if condition is true when arrCalc either is 10 or 01
    if (arrCalc == 10 || arrCalc == 01) {
      arrRes = arrRes + 0; //after XOR rule value has to be 0
    } else {
      arrRes = arrRes + 1; //after XOR rule value has to be 1
    }
    var XOR2txt = bin.text(arrRes); //convert binary XOR Code to text
  }
  console.log("DecodedTxt = " + XOR2txt);
  console.log("Decoded = " + arrRes);
} else {
  console.log("Key and Message has not the same lenght in Binary"); //message if key and message are not same length
}
