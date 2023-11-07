import InputValidator from "../../../src/lib/Validator/InputValidator";

describe("InputValidator.lottoMoney - 기능", () => {
  test.each([["1000", "0", "3500", "-3000"]])(
    "로또 구매 금액 입력이 %s와 같이 주어질 때, 검증 결과는 정상 처리되어야 한다.",
    (money) => {
      expect(() => {
        InputValidator.lottoMoney(money);
      }).not.toThrow();
    },
  );
});

describe("InputValidator.lottoMoney - 예외", () => {
  test.each([
    ["35.4", "자료형"],
    ["삼십", "자료형"],
    ["2,300", "자료형"],
    ["3000j", "자료형"],
  ])(
    "로또 구매 금액 입력이 %s와 같이 주어질 때, %s의 문제로 에러를 발생시켜야 한다.",
    (money) => {
      expect(() => {
        InputValidator.lottoMoney(money);
      }).toThrow("[ERROR]");
    },
  );
});

describe("InputValidator.winNumbers - 기능", () => {
  test.each([
    "1,2,3,4,5,6",
    "1,2,3,4",
    "51,52,53,54,55,56,57",
    "-1,-2,-3,-4,-5,-6",
    "7,7,7,7,7,7",
  ])(
    "당첨 번호가 %s와 같이 주어질 때, 검증 결과는 정상 처리되어야 한다.",
    async (numbers) => {
      await expect(() => {
        InputValidator.winNumbers(numbers);
      }).not.toThrow();
    },
  );
});

describe("InputValidator.winNumbers - 예외", () => {
  test.each([
    ["1,2,3,4,34.5", "원소의 자료형"],
    ["1,2,3,십,5,6,7", "원소의 자료형"],
    ["1,2,3,4, 5", "원소의 자료형"],
    ["1,2,3,[4],5", "원소의 자료형"],
    ["1, 2,", "원소의 자료형"],
    ["", "원소의 자료형"],
  ])(
    "당첨 번호가 %s와 같이 주어질 때, 검증 결과는 %s의 문제로 에러를 발생시켜야 한다.",
    (numbers) => {
      expect(() => {
        InputValidator.winNumbers(numbers);
      }).toThrow("[ERROR]");
    },
  );
});

describe("InputValidator.bonusNumber - 기능", () => {
  test.each([["1", "45", "0", "54321", "12345678910"]])(
    "보너스 번호가 %s와 같이 주어질 때, 검증 결과는 정상 처리되어야 한다.",
    (number) => {
      expect(() => {
        InputValidator.bonusNumber(number);
      }).not.toThrow("[ERROR]");
    },
  );
});

describe("InputValidator.bonusNumber - 예외", () => {
  test.each([
    ["[]", "자료형"],
    ["35.4", "자료형"],
    ["삼십", "자료형"],
    ["2,300", "자료형"],
  ])(
    "보너스 번호가 %s와 같이 주어질 때, %s의 문제로 에러를 발생시켜야 한다.",
    (number) => {
      expect(() => {
        InputValidator.bonusNumber(number);
      }).toThrow("[ERROR]");
    },
  );
});
