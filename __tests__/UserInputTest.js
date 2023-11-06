import { MissionUtils } from '@woowacourse/mission-utils';
import UserInput from '../src/views/UserInput.js';
import ERROR_MESSAGES from '../src/constants/ErrorMessages.js';

const mockQuestion = (input) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		return Promise.resolve(input);
	});
};

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();

		return Promise.resolve(input);
	});
};

describe('사용자 구입금액 입력 에러처리 테스트', () => {
	const runErrorTest = async (input, errorMsg) => {
		mockQuestion(input);

		const userInput = new UserInput();
		const inputVal = userInput.lottoPurchase();

		await expect(inputVal).rejects.toThrow(errorMsg);
	};

	test.each(['a', '10000a', 'l00000', '100O00', '100 000'])(
		'입력값이 숫자가 아닌 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.value_is_not_digit);
		}
	);

	test.each(['0', '-1', '-999'])('입력값이 양수가 아닌 경우', async (input) => {
		await runErrorTest(input, ERROR_MESSAGES.value_is_not_positive);
	});

	test.each(['500', '990', '1001', '1100', '5'])(
		'입력값이 1000원 단위가 아닌 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.value_is_indivisible);
		}
	);

	test.each(['100001000', '500000000', '9999990000'])(
		'입력값이 최대값을 초과하는 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.value_is_over_maximum_price);
		}
	);
});

describe('사용자 구입금액 입력 정상 동작 테스트', () => {
	const runSuccessTest = async (input, expectedValue) => {
		mockQuestion(input);

		const userInput = new UserInput();
		const inputVal = userInput.lottoPurchase();

		await expect(inputVal).resolves.toEqual(expectedValue);
	};

	test.each([
		['    15000', '15000'],
		['10000    ', '10000'],
		['    30000    ', '30000'],
	])('숫자 양 옆에 공백이 있는 경우', async (input, expectedValue) => {
		await runSuccessTest(input, expectedValue);
	});
});

describe('사용자 당첨 번호 입력 에러처리 테스트', () => {
	const runErrorTest = async (input, errorMsg) => {
		mockQuestion(input);

		const userInput = new UserInput();
		const inputVal = userInput.lottoWinningNumber();

		await expect(inputVal).rejects.toThrow(errorMsg);
	};

	test.each(['1,2,3,4,abc,5', '1o,11,12,13,14,15', '1.,2.,3.,4.,5.,6.'])(
		'구분자로 나눠진 값들 중 숫자가 아닌 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.value_is_not_digit);
		}
	);

	test.each(['1,2,3,4,4,5', '10, 12, 10, 12, 11, 11', '13, 14, 20, 41, 44, 14'])(
		'중복된 값을 입력하는 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.duplicate_value);
		}
	);

	test.each(['1,2,3,4', '1,4,10,15,20', '10, 21, 29, 40, 41, 42, 43', '1,2,3,4,5,6,7,8,9,10'])(
		'로또 번호 갯수가 6개가 아닌 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.lotto_number_count_not_valid);
		}
	);

	test.each(['1,30,43,44,45,46', '10, 20, 30, 40, 50, 60'])(
		'로또 번호 범위밖의 값을 입력하는 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.value_is_not_in_range);
		}
	);
});

describe('사용자 당첨 번호 입력 정상 동작 테스트', () => {
	const runSuccessTest = async (input, expectedValue) => {
		const tmpValue = 9;
		mockQuestions([input, tmpValue]);

		const userInput = new UserInput();
		const inputVal = userInput.lottoWinningNumber();

		const expectedObject = {
			winningNumber: expectedValue,
			winningBonusNumber: 9,
		};

		await expect(inputVal).resolves.toEqual(expectedObject);
	};

	test.each([
		['5, 10, 15, 20, 25, 30', ['5', '10', '15', '20', '25', '30']],
		['1,20,30,40,44,45', ['1', '20', '30', '40', '44', '45']],
	])('이름 양 옆에 공백이 있는 경우', async (input, expectedValue) => {
		await runSuccessTest(input, expectedValue);
	});
});

describe('사용자 보너스 번호 입력 에러처리 테스트', () => {
	const runErrorTest = async (input, errorMsg) => {
		mockQuestions(['1,2,3,4,5,6', input]);

		const userInput = new UserInput();
		const inputVal = userInput.lottoWinningNumber();

		await expect(inputVal).rejects.toThrow(errorMsg);
	};

	test.each(['10o', 'a'])('입력값이 숫자가 아닌 경우', async (input) => {
		await runErrorTest(input, ERROR_MESSAGES.value_is_not_digit);
	});

	test.each(['0', '-1', '-50', '46', '50'])(
		'로또 번호 범위밖의 값을 입력하는 경우',
		async (input) => {
			await runErrorTest(input, ERROR_MESSAGES.value_is_not_in_range);
		}
	);

	test.each(['1', '  5'])('당첨 번호와 중복된 로또 번호 입력하는 경우', async (input) => {
		await runErrorTest(input, ERROR_MESSAGES.invalid_bonus_number);
	});
});

describe('사용자 보너스 번호 입력 정상 동작 테스트', () => {
	const runSuccessTest = async (input, expectedValue) => {
		const tmpWinningNumber = '2,3,4,5,6,7';
		mockQuestions([tmpWinningNumber, input]);

		const userInput = new UserInput();
		const inputVal = userInput.lottoWinningNumber();

		const expectedObject = {
			winningNumber: ['2', '3', '4', '5', '6', '7'],
			winningBonusNumber: input.trim(),
		};

		await expect(inputVal).resolves.toEqual(expectedObject);
	};

	test.each([
		['    1', '1'],
		['10    ', '10'],
		['    45    ', '45'],
	])('숫자 양 옆에 공백이 있는 경우', async (input, expectedValue) => {
		await runSuccessTest(input, expectedValue);
	});
});
