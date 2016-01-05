var carset = { "りんご" : "a", "ごりら" : "b", "ラッパ" : "c"};



//////////////////////////////////////////
// for inで連想配列のキーを値をループして取り出す。

for (var n in carset) {
	console.log(n+","+carset[n]);
}



//////////////////////////////////////////
// forEachで連想配列のキーを値をループして取り出す。


// array like object
Object.keys(carset).forEach(function(element){
	console.log(element+","+carset[element]);
});

// getFoo は列挙可能ではないプロパティです
var my_obj = Object.create({}, { getFoo : { value : function () { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // foo のみがアラート表示されるでしょう



// 以下IE対応用拡張
if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length

    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object')

      var result = []

      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop)
      }

      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i])
        }
      }
      return result
    }
  })()
};