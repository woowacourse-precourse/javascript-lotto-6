import { mockQuestions, getLogSpy } from "./ApplicationTest.js";
import InputPrintout from "../src/view/InputPrintout.js";
import { isVaildAmount } from "../src/utils/checkValidation.js";
// const inputAmount = await InputPrintout.inputAmount();

describe("구입 금액 입력 테스트", () => {
	test("1,000원 단위로 입력을 하지 않았을 경우 예외 발생", async () => {
		const answers = "200";
		expect(() => isVaildAmount(answers)).toThrow("[ERROR]");
	});

	test("입력 형식이 정수(양수)가 아닐 경우 예외 발생", async () => {
		const answers = ["a", "10000.2", "-1000"];

		answers.forEach((answer) => {
			expect(() => isVaildAmount(answer)).toThrow("[ERROR]");
		});
	});

	test("공백이 입력 될 경우 예외 발생", async () => {
		const answers = " ";
		expect(() => isVaildAmount(answers)).toThrow("[ERROR]");
	});

	// test.only("정상 값을 입력할 시", async () => {
	// 	const answers = "12000";
	//     mockQuestions(answers);
	// 	expect(() => isVaildAmount(answers)).toThrow("[ERROR]");
	// });
});
