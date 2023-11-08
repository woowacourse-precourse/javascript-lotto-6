import LottoShop from "../../src/domains/LottoShop.js";
import User from "../../src/domains/User.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("로또 가게 클래스 테스트", () => {
  const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
  };

  test("로또를 생성하고, 사용자에게 주어진 개수만큼 판매할 수 있어야 한다", () => {
    // given
    const RANDOM_MOCK_LOTTO_NUMBER = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ];
    mockRandoms(RANDOM_MOCK_LOTTO_NUMBER);
    const BUY_COUNT = 2;
    const lottoShop = new LottoShop();
    const user = new User(2000);

    // when
    lottoShop.sellLottos(user, BUY_COUNT);

    // then
    const lottoNumbersList = user
      .getLottoList()
      .map((lotto) => lotto.getNumbers());
    expect(lottoNumbersList).toEqual(RANDOM_MOCK_LOTTO_NUMBER);
  });
});
