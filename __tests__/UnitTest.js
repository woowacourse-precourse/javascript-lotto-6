import Lotto from "../src/Lotto.js";
import App from "../src/App.js";

describe("App.js 유닛 테스트", () => {
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
  test("makeLotto 생성된 로또번호가 6자이고, 오름차순 정렬 되어있고, 겹치지 않는가", async () => {
    const result = await app.makeLotto();
    expect(result).toHaveLength(6);
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i + 1]).toBeGreaterThan(result[i]);
    }
  });
  test("buyLotto 구입 금액에 맞게 로또가 생성되었는가", async () => {
    const COUNT = 10;
    const result = await app.buyLotto(COUNT);
    expect(result).toHaveLength(COUNT);
  });
});