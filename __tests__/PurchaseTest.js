import Purchase from "../src/Credit.js";
import Lotto from "../src/Lotto.js";

describe("로또 구매 테스트", () => {
  test("로또 구매 예외 테스트 - 숫자가 아닐 경우", () => {
    expect(() => {
      const purchase = new Purchase();
      const result = purchase.getAmountOfLotto("3000j");
      expect(result).toThrow("[ERROR]");
    });
  });

  test("로또 구매 예외 테스트 - 1000단위가 아닐 경우", () => {
    expect(() => {
      const purchase = new Purchase();
      const result = purchase.getAmountOfLotto(3001);
      expect(result).toThrow("[ERROR]");
    });
  });

  test("구매한 로또 개수 테스트", () => {
    const lotto = new Lotto();
    const result = lotto.getLottoNumbers(3);
    expect(result.length).toBe(3);
  });
});
