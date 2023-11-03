import { lottoCounter } from "../src/App.js";

describe("구입 금액에 따른 로또 개수 테스트", () => {
  test("구입 금액에 따라 올바른 개수의 로또를 발행한다.", () => {
    INPUT = 10000;
    OUTPUT = 10;

    const result = lottoCounter(INPUT);
    expect(result).toBe(OUTPUT);
  });
  // 아래에 추가 테스트 작성 가능
});