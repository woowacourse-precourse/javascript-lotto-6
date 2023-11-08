import Lotto from "../src/Lotto.js";
import LottoStore from "../src/LottoStore.js";

describe("로또 구매 테스트", () => {
  test("로또를 구매하면, 구매 갯수 만큼의 로또 클래스를 인수로 갖는 배열을 반환한다", () => {
    const store = new LottoStore();

    expect(store.publishLotto(5).length).toBe(5);
    expect(store.publishLotto(5)[0]).toBeInstanceOf(Lotto);
  });
});
