import { validation } from '../src/validation.js';
import { mockQuestions } from './MainTest.js';

describe('에러 테스트', () => {
	test('금액이 1000원 단위로 떨어지지 않을 경우', () => {
		const price = 1225;
		mockQuestions(price);

		expect(() => validation.buy(price)).toThrow('[ERROR]');
	});
});
