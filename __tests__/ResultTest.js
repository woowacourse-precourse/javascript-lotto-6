import Result from "../src/Result";

const sum = 8000;
const lottos = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
];
const userLotto = [1, 2, 3, 4, 5, 6];
const bonus = 7;

describe("Result 클래스 테스트", () => {
  test("getter를 통해 당첨 통계를 얻는다.", () => {
    const result = new Result(lottos, userLotto, bonus);

    expect(result.getStatistics()).toEqual([1, 0, 0, 0, 0]);
  });

  test("getter를 통해 수익률을 얻는다.", () => {
    const result = new Result(lottos, userLotto, bonus);

    expect(result.getEarningRate(sum)).toBe("62.5");
  });
});
