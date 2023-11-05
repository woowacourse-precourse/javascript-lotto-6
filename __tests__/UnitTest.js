import Lotto from "../src/Lotto.js";
import App from "../src/App.js";

describe("유닛 테스트", () => {
  const app = new App();
    test.each(["", "1200", "asdf", "3456", "0", "20001"])(
      "구입금액이 0 이상의 1000 단위 숫자가 아니면 false를 리턴한다.",
      async (inputs) => {
        const result = await app.checkMoney(inputs);
      expect(result).toBe(false);
      }
    );
  test.each(["2000", "1000", "200000"])(
    "구입금액이 1000원 단위이다.",
    async (inputs) => {
      const result = await app.checkMoney(inputs);
      expect(result).toBe(true);
    }
  );
});
