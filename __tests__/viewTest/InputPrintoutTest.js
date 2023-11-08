import { mockQuestions, getLogSpy } from "../ApplicationTest.js";
import InputPrintout from "../../src/view/InputPrintout.js";
import { isVaildAmount, isVaildBonusNum } from "../../src/utils/checkValidation.js";

describe("inputAmount(구입 금액 입력) 테스트", () => {
	test("[유효성]1,000원 단위로 입력을 하지 않았을 경우 예외 발생", () => {
		const answers = "200";
		expect(() => isVaildAmount(answers)).toThrow("[ERROR]");
	});

	test("[유효성]입력 형식이 정수(양수)가 아닐 경우 예외 발생", () => {
		const answers = ["a", "10000.2", "-1000"];

		answers.forEach((answer) => {
			expect(() => isVaildAmount(answer)).toThrow("[ERROR]");
		});
	});

	test("[유효성]공백이 입력 될 경우 예외 발생", () => {
		const answers = " ";
		expect(() => isVaildAmount(answers)).toThrow("[ERROR]");
	});

	test("잘못된 값을 입력 할 시 제대로 된 값을 입력할 때까지 반복", async () => {
		const answers = ["100", "a", "3000"];
		const logSpy = getLogSpy();
		const messages = ["[ERROR]", "[ERROR]"];

		mockQuestions(answers);
		await InputPrintout.inputAmount();

		messages.forEach((message) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
		});
	});
});

describe("inputLottoNumbers(당첨 번호 입력) 테스트", () => {
	test("잘못된 값을 입력 할 시 제대로 된 값을 입력할 때까지 반복", async () => {
		const answers = ["1,2,3,4,5", "1,2,3,4,5,5", "1,2,3,4,5,a", "1,2,3,4,5,6"];
		const logSpy = getLogSpy();
		const messages = ["[ERROR]", "[ERROR]", "[ERROR]"];

		mockQuestions(answers);
		await InputPrintout.inputLottoNumbers();

		messages.forEach((message) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
		});
	});
});

describe("inputBonusNum(보너스 번호 입력) 테스트", () => {
	test("[유효성]입력 형식이 숫자 또는 양수가 아닐 경우 예외 발생", () => {
		const answers = ["a", "10.2", "-10"];

		answers.forEach((answer) => {
			expect(() => isVaildBonusNum(answer)).toThrow("[ERROR]");
		});
	});

	test("[유효성]당첨 번호와 중복 경우 예외 발생", () => {
		const answer = "6";
		const winningNumber = ["1", "2", "3", "4", "5", "6"];

		expect(() => isVaildBonusNum(answer, winningNumber)).toThrow("[ERROR]");
	});

	test("잘못된 값을 입력 할 시 제대로 된 값을 입력할 때까지 반복", async () => {
		const answers = ["-1", "a", "6", "10"];
		const winningNumber = [1, 2, 3, 4, 5, 6];
		const logSpy = getLogSpy();
		const messages = ["[ERROR]", "[ERROR]", "[ERROR]"];

		mockQuestions(answers);
		await InputPrintout.inputBonusNum(winningNumber);

		messages.forEach((message) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
		});
	});
});
