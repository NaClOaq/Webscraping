// var fs = require('fs');

// fs.readFile('C:\\Users\\John Do\\Downloads\\働く女性のための市販薬ガイド：日経ウーマンオンライン.htm', 'utf8', function (err, text) {
//     console.log(text);
// });





var arr = ["a", "b", "c"];
// console.log(Object.keys(arr)); // "0,1,2" とアラート表示するでしょう

// array like object
// var obj = { 0 : "a", 1 : "b", 2 : "c"};
// Object.keys(obj).forEach(function(element){
// 	console.log(element+","+obj[element]);
// });

// console.log(Object.keys(obj)); // "0,1,2" とアラート表示するでしょう

// getFoo は列挙可能ではないプロパティです
var my_obj = Object.create({}, { getFoo : { value : function () { return this.foo } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // foo のみがアラート表示されるでしょう

