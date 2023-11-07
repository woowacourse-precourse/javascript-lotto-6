import { LOTTO_CONSTANTS } from '../src/Constants/LottoContstants';
import VarificationManager from '../src/Models/VarificationManager';

describe('checkPurchasePrice => 인자로 들어오는 값이 구매 금액으로 유효한지 테스트', () => {
	test('유효한 값이 들어오지 않을 경우 에러를 띄운다.', () => {
		// given
		const cost = '1000j';

		// when, then
		expect(() => VarificationManager.checkPurchasePrice(cost)).toThrow('[ERROR]');
	});

	test(`${LOTTO_CONSTANTS.standartLottoCost} 단위로 들어오지 않을 경우 에러를 띄운다.`, () => {
		// given
		const cost = `${LOTTO_CONSTANTS.standartLottoCost + LOTTO_CONSTANTS.standartLottoCost / 10}`;

		// when, then
		expect(() => VarificationManager.checkPurchasePrice(cost)).toThrow('[ERROR]');
	});

	test('유효한 값이 들어오는 경우 정상 동작한다.', () => {
		// given
		const cost = '1000';

		// when, then
		expect(() => VarificationManager.checkPurchasePrice(cost)).not.toThrow();
	});
});

describe('checkLottoNumber => 인자로 받은 로또 번호들이 유효한 번호들인지 테스트', () => {
	test.each([
		// given
		['문자', ['1', '2', '3', '4', '5', 'j']],
		['음수', ['1', '2', '3', '4', '5', '-1']],
		['소수', ['1', '2', '3', '4', '5', '1.5']],
	])('%s가 포함된 경우 에러를 띄운다.', (_, second) => {
		expect(() => VarificationManager.checkLottoNumber(second)).toThrow('[ERROR]');
	});

	test.each([
		// given
		[['1', '2', '3', '4', '5']],
		[['1', '2', '3', '4']],
		[['1', '2', '3', '4', '5', '7', '6']],
	])('%s의 경우 로또 번호 길이가 적절하지 않아 에러를 띄운다.', (value) => {
		expect(() => VarificationManager.checkLottoNumber(value)).toThrow('[ERROR]');
	});

	test('중복된 값을 전달 받은 경우 에러를 띄운다.', () => {
		// given
		const numbers = ['1', '2', '3', '4', '5', '5'];

		// when, then
		expect(() => VarificationManager.checkBonusLottoNumber(numbers)).toThrow('[ERROR]');
	});

	test(`로또 번호 최소값(${LOTTO_CONSTANTS.minLottoNumber}) 보다 작은 값이 입력된 경우 에러를 띄운다.`, () => {
		// given
		const numbers = ['0', '1', '2', '3', '4', '5'];

		// when, then
		expect(() => VarificationManager.checkBonusLottoNumber(numbers)).toThrow('[ERROR]');
	});

	test(`로또 번호 최대값(${LOTTO_CONSTANTS.maxLottoNumber}) 보다 큰 값이 입력된 경우 에러를 띄운다.`, () => {
		// given
		const numbers = ['1', '2', '3', '4', '5', '46'];

		// when, then
		expect(() => VarificationManager.checkBonusLottoNumber(numbers)).toThrow('[ERROR]');
	});
});
