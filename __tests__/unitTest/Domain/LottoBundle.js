import Lotto from "../../../src/Lotto";
import LottoBundle from "../../../src/lib/Domain/LottoBundle";
import { GAME_RULE } from "../../../src/lib/Constants";
import { mockRandoms } from "../../ApplicationTest";

describe("LottoBundle.constructor - 기능", () => {
  test("구입 금액이 조건을 갖추어 주어질 때, 랜덤한 로또를 생성할 수 있어야 한다..", () => {
    // given
    const random = [
      [21, 2, 43, 34, 15, 26],
      [7, 28, 19, 30, 41, 12],
      [13, 24, 35, 16, 37, 29],
      [4, 7, 8, 12, 45, 9],
    ];
    const expected = [
      [2, 15, 21, 26, 34, 43],
      [7, 12, 19, 28, 30, 41],
      [13, 16, 24, 29, 35, 37],
    ];
    mockRandoms(random);

    // when
    const lottoBundle = new LottoBundle(
      expected.length * GAME_RULE.LOTTO_PRICE,
    );
    expect(
      lottoBundle.items.every((item) => {
        return item instanceof Lotto;
      }),
    ).toEqual(true);
    expect(lottoBundle.purchaseHistory).toEqual(expected);
  });
});

describe("LottoBundle.setItems - 예외", () => {
  test("이미 로또 다발에 아이템이 존재할 때, 아이템 등록을 시도하면 에러를 발생시켜야 한다.", () => {
    // given
    const randoms = [[1, 2, 3, 4, 5, 6]];
    mockRandoms(randoms);
    const lottoBundle = new LottoBundle(randoms.length * GAME_RULE.LOTTO_PRICE);

    // then
    expect(() => {
      lottoBundle.items = randoms;
    }).toThrow("Cannot set property");
  });
});

describe("LottoBundle.setPurchaseHistory - 예외", () => {
  test("이미 로또 다발에 구매 내역이 존재할 때, 구매 내역 등록을 시도하면 에러를 발생시켜야 한다.", () => {
    // given
    const randoms = [[1, 2, 3, 4, 5, 6]];
    mockRandoms(randoms);
    const lottoBundle = new LottoBundle(randoms.length * GAME_RULE.LOTTO_PRICE);

    // then
    expect(() => {
      lottoBundle.purchaseHistory = randoms;
    }).toThrow("Cannot set property ");
  });
});
