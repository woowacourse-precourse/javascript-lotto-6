import LottoMachine from "../src/LottoMachine.js";

describe("당첨번호 테스트 in 로또머신 클래스", () => {
  test("당첨번호 원소에 숫자가 아닌 경우가 존재한다면 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine('A, 2, 3, 4, 5, 6', '7');
    }).toThrow("[ERROR]: 숫자타입이 아닙니다.");
  });

  test("당첨번호 원소개수가 6개가 아닌경우 예외가 발생.", () => {
    expect(() => {
      new LottoMachine('1, 2, 3, 4, 5', '7');
    }).toThrow("[ERROR]: 당첨 번호의 개수가 6이 아닙니다.");
  });

  test("당첨번호 원소에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine('1, 1, 3, 4, 5, 6', '7');
    }).toThrow("[ERROR]: 당첨 번호에 중복된 숫자가 존재합니다.");
  });

  test("당첨번호 원소가 1 ~ 45사이의 값이 아닌게 있으면 예외가 발생.", () => {
    expect(() => {
      new LottoMachine('0, 1, 2, 3, 4, 5', '7');
    }).toThrow("[ERROR]: 1 ~ 45의 숫자가 아닙니다.");
  });

  test("당첨번호에 문법 오류가 있으면 예외가 발생.", () => {
    expect(() => {
      new LottoMachine(',1, 2, 3, 4, 5, 6,', '7');
    }).toThrow("[ERROR]: 문법오류가 존재합니다.");
  });
});

describe("보너스번호 테스트 in 로또머신 클래스", () => {
  test("보너스번호 원소에 숫자가 아닌 경우가 존재한다면 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine('1, 2, 3, 4, 5, 6', 'a');
    }).toThrow("[ERROR]");
  });

  test("보너스번호 원소가 1 ~ 45사이의 값이 아닌게 있으면 예외가 발생.", () => {
    expect(() => {
      new LottoMachine('1, 2, 3, 4, 5, 6', '46');
    }).toThrow("[ERROR]");
  });

  test("보너스번호에 당첨번호와 중복된 값이 있으면 예외가 발생.", () => {
    expect(() => {
      new LottoMachine('1, 2, 3, 4, 5, 6', '1');
    }).toThrow("[ERROR]");
  });
});
