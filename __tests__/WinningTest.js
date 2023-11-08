/* eslint-disable no-undef */
import CheckWinning from "../src/CheckWinning.js";
import Lotto from "../src/Lotto.js";

describe("로또 당첨 등수 테스트", () => {
  test("당첨되지 않았을 경우", () => {
    const lottoNumbers = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];
    const winningNumber = new Lotto([13, 14, 15, 16, 17, 18]);
    const bonus = 23;
    const input = CheckWinning(lottoNumbers, winningNumber, bonus);
    const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    expect(input).toEqual(result);
  });

  test("1등에 당첨된 경우", () => {
    const lottoNumbers = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = 23;
    const input = CheckWinning(lottoNumbers, winningNumber, bonus);
    const result = { first: 1, second: 0, third: 0, fourth: 0, fifth: 0 };
    expect(input).toEqual(result);
  });

  test("2등에 당첨된 경우", () => {
    const lottoNumbers = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumber = new Lotto([1, 2, 3, 4, 5, 7]);
    const bonus = 6;
    const input = CheckWinning(lottoNumbers, winningNumber, bonus);
    const result = { first: 0, second: 1, third: 0, fourth: 0, fifth: 0 };
    expect(input).toEqual(result);
  });

  test("3등에 당첨된 경우", () => {
    const lottoNumbers = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumber = new Lotto([1, 2, 3, 4, 5, 7]);
    const bonus = 23;
    const input = CheckWinning(lottoNumbers, winningNumber, bonus);
    const result = { first: 0, second: 0, third: 1, fourth: 0, fifth: 0 };
    expect(input).toEqual(result);
  });

  test("4등에 당첨된 경우", () => {
    const lottoNumbers = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumber = new Lotto([1, 2, 3, 4, 7, 8]);
    const bonus = 6;
    const input = CheckWinning(lottoNumbers, winningNumber, bonus);
    const result = { first: 0, second: 0, third: 0, fourth: 1, fifth: 0 };
    expect(input).toEqual(result);
  });

  test("5등에 당첨된 경우", () => {
    const lottoNumbers = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumber = new Lotto([1, 2, 3, 7, 8, 9]);
    const bonus = 6;
    const input = CheckWinning(lottoNumbers, winningNumber, bonus);
    const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 1 };
    expect(input).toEqual(result);
  });

  test("여러개 중복 당첨된 경우", () => {
    const lottoNumbers = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
    ];
    const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = 7;
    const input = CheckWinning(lottoNumbers, winningNumber, bonus);
    const result = { first: 1, second: 1, third: 0, fourth: 0, fifth: 0 };
    expect(input).toEqual(result);
  });
});
