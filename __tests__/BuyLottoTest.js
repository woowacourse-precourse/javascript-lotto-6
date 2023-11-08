import LottoPurchase from "../src/LottoPurchase";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 구매 클래스 테스트", () => {
  test("로또 한개 구매하는 테스트", () => {
    //given
    const randoms = [[8, 21, 23, 41, 42, 43]];
    mockRandoms(randoms);

    //when
    const lottoPurchase = new LottoPurchase();
    const boughtLotto = lottoPurchase.buyOneLotto();

    //then

    expect(boughtLotto).toEqual([8, 21, 23, 41, 42, 43]);
  });
  test("입력받은 숫자만큼 로또 구매하는 테스트", () => {
    //given
    const randoms = [
      [8, 21, 23, 41, 42, 43],
      [1, 2, 3, 4, 5, 6],
    ];
    mockRandoms(randoms);

    //when
    const lottoPurchase = new LottoPurchase(2);
    lottoPurchase.buyLottos();
    const boughtLotto = lottoPurchase.getBoughtLotto;

    //then
    expect(boughtLotto).toEqual([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 3, 4, 5, 6],
    ]);
  });
});
