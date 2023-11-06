import InputView from "../../../src/lib/View/InputView";
import { mockQuestions } from "../../ApplicationTest";

describe("InputView.ticketMoney - 기능", () => {
  test.each([
    [["1000"], 1000],
    [["0"], 0],
    [["3500"], 3500],
    [["-3000"], -3000],
  ])(
    "티켓 구매 금액 입력이 %s와 같이 주어질 때, 결과는 %s와 같아야 한다.",
    async (questions, expected) => {
      // given
      mockQuestions(questions);
      // when
      const result = await InputView.ticketMoney();
      // then
      expect(result).toEqual(expected);
    },
  );
});

describe("InputView.ticketMoney - 예외", () => {
  test.each([
    [["35.4"], "자료형"],
    [["삼십"], "자료형"],
    [["2,300"], "자료형"],
    [["3000j"], "자료형"],
  ])(
    "티켓 구매 금액 입력이 %s와 같이 주어질 때, %s의 문제로 에러를 발생시켜야 한다.",
    async (questions) => {
      // given
      mockQuestions(questions);
      // then
      await expect(() => InputView.ticketMoney()).rejects.toThrow("[ERROR]");
    },
  );
});

describe("InputView.winNumbers - 기능", () => {
  test.each([
    [["1,2,3,4,5,6"], [1, 2, 3, 4, 5, 6]],
    [["1,2,3,4"], [1, 2, 3, 4]],
    [["51,52,53,54,55,56,57"], [51, 52, 53, 54, 55, 56, 57]],
    [["-1,-2,-3,-4,-5,-6"], [-1, -2, -3, -4, -5, -6]],
    [["7,7,7,7,7,7"], [7, 7, 7, 7, 7, 7]],
  ])(
    "당첨 번호가 %s와 같이 주어질 때, 결과는 %s와 같아야 한다.",
    async (questions, expected) => {
      // given
      mockQuestions(questions);
      // when
      const result = await InputView.winNumbers();
      // then
      expect(result).toEqual(expected);
    },
  );
});

describe("InputView.winNumbers - 예외", () => {
  test.each([
    [["1,2,3,4,34.5"], "원소의 자료형"],
    [["1,2,3,십,5,6,7"], "원소의 자료형"],
    [["1,2,3,4, 5"], "원소의 자료형"],
    [["1, 2,"], "원소의 자료형"],
    [[""], "원소의 자료형"],
  ])(
    "당첨 번호가 %s와 같이 주어질 때, %s의 문제로 에러를 발생시켜야 한다.",
    async (questions) => {
      // given
      mockQuestions(questions);
      // then
      await expect(() => InputView.winNumbers()).rejects.toThrow("[ERROR]");
    },
  );
});

describe("InputView.bonusNumber - 기능", () => {
  test.each([
    [["1"], 1],
    [["45"], 45],
    [["0"], 0],
    [["54321"], 54321],
    [["12345678910"], 12345678910],
  ])(
    "보너스 번호가 %s와 같이 주어질 때, 결과는 %s와 같아야 한다.",
    async (questions, expected) => {
      // given
      mockQuestions(questions);
      // when
      const result = await InputView.bonusNumber();
      // then
      expect(result).toEqual(expected);
    },
  );
});

describe("InputView.bonusNumber - 예외", () => {
  test.each([
    [["35.4"], "자료형"],
    [["삼십"], "자료형"],
    [["2,300"], "자료형"],
  ])(
    "보너스 번호가 %s와 같이 주어질 때, %s의 문제로 에러를 발생시켜야 한다.",
    async (questions) => {
      // given
      mockQuestions(questions);
      // then
      await expect(() => InputView.bonusNumber()).rejects.toThrow("[ERROR]");
    },
  );
});
