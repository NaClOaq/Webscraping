var client = require('cheerio-httpcli');
 
// Googleで「node.js」について検索する。 
var word = 'node.js';
 
// callbackを指定しなかったのでPromiseオブジェクトが返る 
// var p = client.fetch('http://www.google.com/search', { q: word })
var p = client.fetch('http://ext.ricoh.co.jp/solution/vc/case/index.html')

p.then(function (result) {
  // レスポンスヘッダを参照 
  console.log(result.response.request.uri.href);
 
  // HTMLタイトルを表示 
  // console.log(result.$('title').text());
 

  // リンク一覧を表示 
  // console.log(result.$('#id_Conversion .contact_sct_ttl')._html())
 

  result.$('#id_Conversion').each(function (idx) {
    console.log(result.$(this)._html());
  });

})
 
p.catch(function (err) {
  console.log(err);
});
 
p.finally(function () {
  console.log('done');
});
