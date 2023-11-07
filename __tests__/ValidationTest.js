import Validation from "../src/Validation";
import { ERROR_MESSAGE } from "../src/constants/errorMessage";

describe("예외 테스트: 구매 금액", () => {
	test("입력값이 잘못된 경우 예외처리", () => {
		const money = ["", 0, " ", 1500, "j"];
		money.forEach((price)=>{
			expect(() => {
				Validation.validPurchaseAmount(price);
			}).toThrow(Error);
		});
  });
	test("입력값이 숫자가 아닌 경우", () => {
		const money = ["1000j", "1,000", "j", "1 000"];
		money.forEach((price)=>{
			expect(() => {
				Validation.validPurchaseAmount(price);
			}).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
		});
  });
	test("입력값이 없는 경우", () => {
		const money = ["", " ", "   "];
		money.forEach((price)=>{
			expect(() => {
				Validation.validPurchaseAmount(price);
			}).toThrow(ERROR_MESSAGE.NO_INPUT);
		});
  });
	test("입력값이 1000으로 나누어 떨어지지 않는 경우", () => {
		const money = [1100, 12500, 500];
		money.forEach((price)=>{
			expect(() => {
				Validation.validPurchaseAmount(price);
			}).toThrow(ERROR_MESSAGE.WRONG_UNIT_OF_MONEY);
		});
  });
});


describe("예외 테스트: 당첨 로또", () => {
	test("입력값이 잘못된 경우 예외처리", () => {
		const lottery = [[1,2,3,4,],[1,2,3,4,5],[1,2,3,'j',5,6],[1,2,3,4,5,5],[1,2,3,0,4,5,6],[1,2,3,,4,6],[1,2,3,48,5,6]];
		lottery.forEach((numbers)=>{
			expect(() => {
				Validation.validWinningNumber(numbers);
			}).toThrow(Error);
		});
  });
	test("입력된 번호가 6개가 아닌 경우 예외처리", () => {
		const lottery = [[1,2,3,4,5],[1,2,3,4,]];
		lottery.forEach((numbers)=>{
			expect(() => {
				Validation.validWinningNumber(numbers);
			}).toThrow(ERROR_MESSAGE.NO_WINNING_NUMBERS);
		});
  });
	test("입력값에 숫자가 아닌 문자가 포함된 경우 예외처리", () => {
		const lottery = [[1,2,3,"j",4,5],[1,2,3,,4,5]];
		lottery.forEach((numbers)=>{
			expect(() => {
				Validation.validWinningNumber(numbers);
			}).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
		});
  });
	test("입력된 숫자 중 중복된 숫자가 있는 경우 예외처리", () => {
		const lottery = [[1,2,3,3,4,5],[1,2,3,1,3,4]];
		lottery.forEach((numbers)=>{
			expect(() => {
				Validation.validWinningNumber(numbers);
			}).toThrow(ERROR_MESSAGE.INPUT_DUPLICATION);
		});
  });
	test("입력된 숫자 중 1~45 사이가 아닌 경우 예외처리", () => {
		const lottery = [[1,2,3,47,5,6],[1,2,3,0,4,5]];
		lottery.forEach((numbers)=>{
			expect(() => {
				Validation.validWinningNumber(numbers);
			}).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
		});
  });
});


describe("예외 테스트: 보너스 번호", () => {
	test("입력값이 잘못된 경우 예외처리", () => {
		const lottery = [1,2,3,4,5,6];
		const bonus = ['',' ','j',0,47,5];
		bonus.forEach((number)=>{
			expect(() => {
				Validation.validBonusNumber(lottery,number);
			}).toThrow(Error);
		});
  });
	test("입력값이 없는 경우 예외처리", () => {
		const lottery = [1,2,3,4,5,6];
		const bonus = ['',' '];
		bonus.forEach((number)=>{
			expect(() => {
				Validation.validBonusNumber(lottery,number);
			}).toThrow(ERROR_MESSAGE.NO_INPUT);
		});
  });
	test("입력값이 숫자가 아닌 경우 예외처리", () => {
		const lottery = [1,2,3,4,5,6];
		const bonus = ['j'];
		bonus.forEach((number)=>{
			expect(() => {
				Validation.validBonusNumber(lottery,number);
			}).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
		});
  });
	test("입력값이 1~45사이 숫자가 아닌 경우 예외처리", () => {
		const lottery = [1,2,3,4,5,6];
		const bonus = [0,47];
		bonus.forEach((number)=>{
			expect(() => {
				Validation.validBonusNumber(lottery,number);
			}).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
		});
  });
	test("입력값이 이미 당첨 번호에 있는 경우 예외처리", () => {
		const lottery = [1,2,3,4,5,6];
		const bonus = [3,5,1];
		bonus.forEach((number)=>{
			expect(() => {
				Validation.validBonusNumber(lottery,number);
			}).toThrow(ERROR_MESSAGE.ALREADY_EXIST);
		});
  });
});
