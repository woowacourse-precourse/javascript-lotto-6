import ReturnOnInvestment from '../src/ReturnOnInvestment';

describe('ReturnOnInvestment 모듈 테스트', () => {
	test('로또 8개 구매후 1개만 4개의 번호가 일치할 경우', () => {
		const PRINCIPAL = 8000;
		const WINNING_LIST = [1, 0, 0, 0, 0];
		const ROI = 62.5;

		expect(ReturnOnInvestment(PRINCIPAL, WINNING_LIST)).toEqual(ROI);
	});

	test('로또 1개 구매후 6개의 번호가 일치할 경우', () => {
		const PRINCIPAL = 1000;
		const WINNING_LIST = [0, 0, 0, 0, 1];
		const ROI = 200000000;

		expect(ReturnOnInvestment(PRINCIPAL, WINNING_LIST)).toEqual(ROI);
	});
});
