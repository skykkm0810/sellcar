var assert = require("assert"); //nodejs에서 제공하는 aseert 모듈
const request = require('superagent');
const cheerio = require('cheerio');
describe('신차판매 메인페이지 테스트', function() {

	   
	describe('신차판매문구 존재 여부', function () {
		it('response result check', function () {
			var url = 'http://localhost:3000/';
			request.get(url).end(function(err, res){
				assert.ok(res.ok);
				assert.strictEqual(res.statusCode, 200);
				assert.ok(res.text.includes('신차판매'));

				const $ = cheerio.load(res.text);
				assert.ok($('header').text().includes('신차판매'))
			})
		});
	});

	describe('indexOf() 메서드', function () {
		it('값이 없을 때에는 -1 을 리턴함', function () {
			assert.strictEqual(-1, [1,2,3].indexOf(5));
			assert.strictEqual(-1, [1,2,3].indexOf(0));
		});
	});
	
});