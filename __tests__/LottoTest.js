import Lotto from "../src/model/Lotto.js";

describe("로또 클래스 테스트", () => {
	test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
		const testVal = [1, 2, 3, 4, 5, 6, 7];
		expect(() => {
			new Lotto(testVal.join(","));
		}).toThrow("[ERROR]");
	});

	test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
		const testVal = [1, 2, 3, 4, 5, 5];
		expect(() => {
			new Lotto(testVal.join(","));
		}).toThrow("[ERROR]");
	});

	test("로또 번호가 정수(양수)가 아닐 경우 예외가 발생한다.", () => {
		const testMinus = [1, 2, 3, 4, 5, -2];
		const testZero = [1, 2, 3, 4, 5, 0];
		const testDouble = [1, 2, 3, 4, 5, 3.44];
		expect(() => {
			new Lotto(testMinus.join(","));
		}).toThrow("[ERROR]");
		expect(() => {
			new Lotto(testZero.join(","));
		}).toThrow("[ERROR]");
		expect(() => {
			new Lotto(testDouble.join(","));
		}).toThrow("[ERROR]");
	});

	test("로또 번호 숫자 범위가 1~45가 아닐 경우 예외가 발생한다.", () => {
		const testVal1 = [1, 2, 3, 4, 5, 75];
		const testVal2 = [1, 2, 3, 4, 5, 46];
		expect(() => {
			new Lotto(testVal1.join(","));
		}).toThrow("[ERROR]");
		expect(() => {
			new Lotto(testVal2.join(","));
		}).toThrow("[ERROR]");
	});

	test("로또 번호에 숫자 또는 숫자인 문자열 외의 것이 입력 될 경우 예외가 발생한다.", () => {
		const testString = [1, 2, 3, 4, 5, "a"];
		const testArr = [1, 2, 3, 4, 5, [1]];
		expect(() => {
			new Lotto(testString.join(","));
		}).toThrow("[ERROR]");
		expect(() => {
			new Lotto(testArr.join(","));
		}).toThrow("[ERROR]");
	});

	test("올바른 입력값을 입력시 객체가 생성된다.", () => {
		const testVal = [1, 2, 3, 4, 5, 6];
		const lotto = new Lotto(testVal.join(","));
		expect(() => lotto).not.toThrow("[ERROR]");
		expect(lotto.getNumbers()).toStrictEqual(["1", "2", "3", "4", "5", "6"]);
	});
});
