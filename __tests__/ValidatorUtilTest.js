import ValidatorUtil from "../src/validators/ValidatorUtil";

describe("예외처리 테스트", () => {
	test.each([[["a"], ["1000j"]]])(
		"숫자가 아닌 입력값에 대해 예외처리한다.",
		(inputs) => {
			expect(() => {
				ValidatorUtil.isNumber(inputs);
			}).toThrow("[ERROR]");
		}
	);

	test.each([[["0"], ["-1"]]])(
		"양수가 아닌 입력값에 대해 예외처리한다.",
		(inputs) => {
			expect(() => {
				ValidatorUtil.isPositiveNumber(inputs);
			}).toThrow("[ERROR]");
		}
	);

	test.each([[["10"], ["1004"]]])(
		"1000의 배수가 아닌 입력값에 대해 예외처리한다.",
		(inputs) => {
			expect(() => {
				ValidatorUtil.isCostValid(inputs);
			}).toThrow("[ERROR]");
		}
	);

	test.each([[["0"], ["1004"]]])(
		"1~45 사이가 아닌 입력값에 대해 예외처리한다.",
		(inputs) => {
			expect(() => {
				ValidatorUtil.isNumberInRange(inputs);
			}).toThrow("[ERROR]");
		}
	);

	test.each([
		[
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4, 5, 6, 7],
		],
	])("입력값 갯수가 6개가 아닌 경우에 대해 예외처리한다.", (inputs) => {
		expect(() => {
			ValidatorUtil.isLength(inputs);
		}).toThrow("[ERROR]");
	});

	test.each([[[1, 2, 3, 4, 5, 5, 7]], [[1, 2, 3, 4, 5, 6, 6]]])(
		"로또 숫자의 중복 관련하여 예외처리한다.",
		(inputs) => {
			expect(() => {
				ValidatorUtil.isDuplicated(inputs);
			}).toThrow("[ERROR]");
		}
	);
});
