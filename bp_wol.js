var client = require('cheerio-httpcli');

// Googleで「node.js」について検索する。 
var word = 'node.js';

// callbackを指定しなかったのでPromiseオブジェクトが返る 
// var p = client.fetch('http://www.google.com/search', { q: word })


var URL = {"解熱鎮痛薬":"http://wol.nikkeibp.co.jp/article/column/20141118/195081",
"総合感冒薬・鎮咳去痰薬":"http://wol.nikkeibp.co.jp/article/column/20141120/195261",
"胃腸薬":"http://wol.nikkeibp.co.jp/article/column/20141120/195281",
"便秘薬・肥満症改善薬":"http://wol.nikkeibp.co.jp/article/column/20141120/195283",
"アレルギー・鼻炎に効く薬":"http://wol.nikkeibp.co.jp/article/column/20141121/195321",
"目薬":"http://wol.nikkeibp.co.jp/article/column/20141120/195284",
"滋養強壮薬":"http://wol.nikkeibp.co.jp/article/column/20141120/195285",
"肩こり・関節痛の薬":"http://wol.nikkeibp.co.jp/article/column/20141121/195366",
"口内炎・口唇ヘルペス・ニキビ・肌荒れなどの薬":"http://wol.nikkeibp.co.jp/article/column/20141120/195286",
"かゆみ止め薬":"http://wol.nikkeibp.co.jp/article/column/20141121/195365",
"水虫の薬":"http://wol.nikkeibp.co.jp/article/column/20141121/195322",
"膣カンジダ再発の薬":"http://wol.nikkeibp.co.jp/article/column/20141121/195363",
"発毛・育毛薬":"http://wol.nikkeibp.co.jp/article/column/20141121/195364",
"痔の薬":"http://wol.nikkeibp.co.jp/article/column/20141121/195362",
"女性の不調の効くハーブ薬・漢方薬":"http://wol.nikkeibp.co.jp/article/column/20141121/195341"}

// var URL = {0:""}

for (var index in URL) {

	var p = client.fetch(URL[index])

	p.then(function (result) {
		console.log(result.response.request.uri.href);
		console.log(result.$('#kusuriIndex').html())
		console.log()
	})


	p.catch(function (err) {
		console.log('error');
	});
	p.finally(function () {
		console.log('done');
	});


}


