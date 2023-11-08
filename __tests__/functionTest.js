import App from "../src/App.js";
import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Validation, { isPurchaseAmountInputValidation, validateLotto } from "../src/utills/validation.js";
import { winNumberInput } from "../src/functions/input.js";

const getLogSpy = () => {
	const logSpy = jest.spyOn(Console, "print");
	logSpy.mockClear();
	return logSpy;
};

describe("validation 테스트", () => {
	const logSpy = getLogSpy();
	const result = new Validation();

	test("isSafeInteger 테스트", async () => {
		const input = "1,2,3,4,5,a";
		const returnValue = result.isSafeInteger(input)
		await expect(returnValue).toEqual(false);
	})

	test("isInRange 테스트", async () => {
		const input = [1, 2, 3, 4, 0, 6];
		const returnValue = result.isInRange(input);

		await expect(returnValue).toEqual(false);
	})

	test("isDuplicate 테스트", async () => {
		const input = [1, 2, 3, 4, 5, 5];
		const returnValue = result.isDuplicate(input);

		await expect(returnValue).toEqual(false);
	})

	test("validateLotto 테스트", async () => {
		const input = [1, 2, 3, 4, 5, 6];
		const returnValue = validateLotto(input);

		await expect(returnValue).toEqual(true);
	})
});

describe("isPurchaseAmountInputValidation 테스트", () => {
	test("NaN 테스트", async () => {

		const input = NaN;
		const returnValue = isPurchaseAmountInputValidation(input);

		await expect(returnValue).toEqual(false);
	})
});

describe("winNumberInput 테스트", () => {
	test("winNumberArr 테스트", async () => {
		const mockWinNumbers = "1,2,3,4,5,6";
		const mockInput = jest.spyOn(Console, 'readLineAsync').mockResolvedValue(mockWinNumbers);
		const result = await winNumberInput();

		expect(result).toEqual([1, 2, 3, 4, 5, 6]);
	});
});