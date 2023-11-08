import { Console, Random } from "@woowacourse/mission-utils";
import Store from "../src/Store.js";

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("스토어 클래스 테스트", () => {
  test("구입 금액에 따른 로또 개수를 올바르게 구하는지 테스트", async () => {
    const store = new Store();
    Store.inputMoney = jest.fn().mockReturnValue(5000);
    await store.receivePayment();
    expect(store.calculateLottoAmount()).toBe(5);
  });

  test("로또 발행 테스트", () => {
    const store = new Store();
    const logSpy = getLogSpy();
    const outputs = ["[8, 21, 23, 41, 42, 43]", "[3, 5, 11, 16, 32, 38]"];

    const LOTTO_AMOUNT = 2;
    const RANDOM_INPUT = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ];

    mockRandoms(RANDOM_INPUT);
    store.calculateLottoAmount = jest.fn().mockReturnValue(LOTTO_AMOUNT);
    store.issueLotto();

    for (const output of outputs) {
      expect(logSpy).toHaveBeenCalledWith(output);
    }
  });

  test("등수 계산하기 테스트", () => {
    const outputs = [2, 1];
    const compareResultList = [
      { sameNumberCount: 5, bonusIsSame: true },
      { sameNumberCount: 6, bonusIsSame: false },
    ];

    const logSpy = jest.spyOn(Store, "calculateRank");
    logSpy.mockClear();

    for (const compareResult of compareResultList) {
      Store.calculateRank(compareResult);
    }
    for (const output of outputs) {
      expect(logSpy).toHaveReturnedWith(output);
    }
  });
});
