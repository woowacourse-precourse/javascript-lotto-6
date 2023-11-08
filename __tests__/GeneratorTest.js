import LottoMachine from "../src/LottoMachine";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickUniqueNumbersInRange);
};

const randomInputs = [
	[8, 21, 23, 41, 42, 43],
	[3, 5, 11, 16, 32, 38],
	[7, 11, 16, 35, 36, 44],
];

const lottoNumbers = [
	[8, 21, 23, 24, 25, 26],
	[3, 5, 11, 16, 32, 38],
	[1, 2, 3, 4, 5, 6],
];

describe("생성자 클래스 테스트", () => {
	test("유저 입력 값 랜덤 생성 테스트", () => {
		mockRandoms(randomInputs);

		const result = [
			[8, 21, 23, 41, 42, 43],
			[3, 5, 11, 16, 32, 38],
			[7, 11, 16, 35, 36, 44],
		];

		expect(LottoMachine.issueLotto(3)).toEqual(result);
	});

	test.each([
		[randomInputs[0], lottoNumbers[0], 3],
		[randomInputs[1], lottoNumbers[1], 6],
		[randomInputs[2], lottoNumbers[2], null],
	])(
		"유저 숫자와 로또 숫자 비교 테스트",
		(userNumbers, lottoNumbers, count) => {
			expect(
				LottoMachine.getPurchasedLottoAmount(userNumbers, lottoNumbers)
			).toEqual(count);
		}
	);

	test.each([
		[randomInputs[0], 8, true],
		[randomInputs[1], 45, false],
	])(
		"유저 숫자와 보너스 숫자 비교 테스트",
		(userNumbers, bonusNumber, isBonus) => {
			expect(LottoMachine.isBonus(userNumbers, bonusNumber)).toEqual(isBonus);
		}
	);

	test.each([
		[1, false, 0],
		[3, false, 5000],
		[5, false, 1500000],
		[5, true, 30000000],
		[6, false, 2000000000],
	])(
		"유저 숫자와 로또 숫자 비교 결과 금액 산출 테스트",
		(lottoCount, isBonus, profit) => {
			expect(LottoMachine.isProfit(lottoCount, isBonus)).toEqual(profit);
		}
	);
});
