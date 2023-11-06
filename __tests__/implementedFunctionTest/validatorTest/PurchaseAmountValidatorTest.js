import PurchaseAmountValidator from '../../../src/Validator/purchaseAmountValidator.js';
import errorMessage from '../../../src/constants/errorMessage.js';

describe('PurchaseAmountValidator 테스트', () => {
	test('1000단위의 수가 들어오지 않았을 때 에러', () => {
		const purchaseAmount = '1200';
		expect(() => PurchaseAmountValidator.validate(purchaseAmount)).toThrow(errorMessage.INVALID_PURCHASE_AMOUNT);
	});

	test('문자가 들어왔을 때 에러', () => {
		const purchaseAmount = 'a';
		expect(() => PurchaseAmountValidator.validate(purchaseAmount)).toThrow(errorMessage.NOT_NUMBER);
	});

	test('1000 미만의 수가 들어왔을 때 에러', () => {
		const purchaseAmount = '-1000';
		expect(() => PurchaseAmountValidator.validate(purchaseAmount)).toThrow(errorMessage.NOT_ENOUGH_PURCHASE_AMOUNT);
	});

	test('+1000이 들어왔을 때 에러', () => {
		const purchaseAmount = '+1000';
		expect(() => PurchaseAmountValidator.validate(purchaseAmount)).toThrow(errorMessage.UNUSUAL_INPUT);
	});

	test('1000.0이 들어왔을 때 에러', () => {
		const purchaseAmount = '1000.0';
		expect(() => PurchaseAmountValidator.validate(purchaseAmount)).toThrow(errorMessage.UNUSUAL_INPUT);
	});

	test('01000이 들어왔을 때 에러', () => {
		const purchaseAmount = '01000';
		expect(() => PurchaseAmountValidator.validate(purchaseAmount)).toThrow(errorMessage.UNUSUAL_INPUT);
	});
});