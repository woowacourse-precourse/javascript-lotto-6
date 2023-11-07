import { BuyLotto } from '../src/BuyLotto';

describe('BuyLotto 클래스 테스트', () => {
	test('구입 금액으로 0을 입력하면 예외 발생', () => {
		expect(() => {
			new BuyLotto(0);
		}).toThrow('[ERROR]');
	});

	test('구입 금액으로 음수 입력시 예외 발생', () => {
		expect(() => {
			new BuyLotto(-1000);
		}).toThrow('[ERROR]');
	});

	test('구입 금액이 1000으로 나눠 떨어지지 않으면 예외 발생', () => {
		expect(() => {
			new BuyLotto(2100);
		}).toThrow('[ERROR]');
	});
});
