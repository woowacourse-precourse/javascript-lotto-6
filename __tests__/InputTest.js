import Input from "../src/views/Input";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();

		return Promise.resolve(input);
	});
};

describe("입력 클래스 테스트", () => {
	test.each([[["1000j"]], [["1004"]], [["-1000"]]])(
		"로또 구매 금액 입력 예외 테스트",
		async (inputs) => {
			mockQuestions(inputs);

			await expect(Input.readPurchaseAmount()).rejects.toThrow("[ERROR]");
		}
	);

	test.each([[["1,2,3,4,5,6,7"]], [["1,2,3,4,5,6,a"]], [["1,2,3,4,5,77"]]])(
		"유저 숫자 입력 값 예외 테스트",
		async (inputs) => {
			mockQuestions(inputs);

			await expect(Input.readLottoNumber()).rejects.toThrow("[ERROR]");
		}
	);

	test.each([[["1000j"]], [["77"]]])(
		"유저 보너스 숫자 입력 값 예외 테스트",
		async (inputs) => {
			mockQuestions(inputs);

			await expect(Input.readBonusNumber()).rejects.toThrow("[ERROR]");
		}
	);
});
