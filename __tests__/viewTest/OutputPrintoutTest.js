import { mockQuestions, mockRandoms, getLogSpy } from "../ApplicationTest.js";
import OutputPrintout from "../../src/view/OutputPrintout.js";
import { PRINT_OUTPUT } from "../../src/utils/Constant.js";
import LottoController from "../../src/controller/LottoController.js";

jest.mock("../../src/controller/LottoController");

LottoController.matchingNumMap = new Map([
	[PRINT_OUTPUT.three, 1],
	[PRINT_OUTPUT.four, 0],
	[PRINT_OUTPUT.five, 0],
	[PRINT_OUTPUT.fiveBonus, 0],
	[PRINT_OUTPUT.six, 0],
]);

describe("OutputPrintout 모듈 내 함수 테스트", () => {
	test("printLottos(발행한 로또 출력) 테스트", () => {
		const logSpy = getLogSpy();
		const logs = ["3개를 구매했습니다.", "[8, 21, 23, 41, 42, 43]", "[3, 5, 11, 16, 32, 38]"];

		mockRandoms([
			[8, 21, 23, 41, 42, 43],
			[3, 5, 11, 16, 32, 38],
			[7, 11, 16, 35, 36, 44],
		]);
		OutputPrintout.printLottos("3000");

		logs.forEach((log) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
		});
	});

	test("printMathingNumber(당첨 내역 출력) 테스트", () => {
		const logSpy = getLogSpy();
		const logs = [
			"3개 일치 (5,000원) - 1개",
			"4개 일치 (50,000원) - 0개",
			"5개 일치 (1,500,000원) - 0개",
			"5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
			"6개 일치 (2,000,000,000원) - 0개",
		];
		OutputPrintout.printMathingNumber();

		logs.forEach((log) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
		});
	});
});
