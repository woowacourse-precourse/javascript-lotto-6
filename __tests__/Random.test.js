import NUMBER from "../src/constants/NUMBER";
import RandomGenerator from "../src/utils/Random";

describe("Random Generator 테스트", () => {
  test("로또 당첨 번호 생성", () => {
    const winningNumbers = RandomGenerator.lottoWinningNumbers();
    expect(winningNumbers.length).toBe(6);
    winningNumbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(NUMBER.LOTTO.MIN);
      expect(number).toBeLessThanOrEqual(NUMBER.LOTTO.MAX);
    });
  });
});
