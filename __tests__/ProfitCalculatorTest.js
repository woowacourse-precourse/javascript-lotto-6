import ProfitCalculator from "../src/ProfitCalculator.js";
import LottoStore from "../src/LottoStore.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("수익 계산 관련 테스트", () => {
  test("구매한 로또 1개 중 숫자 3개가 일치하는 로또가 1개 있으면 총 수익이 500%이다.", () => {
    const store = new LottoStore();

    mockRandoms([[1, 2, 3, 11, 12, 13]]);

    const lottos = store.publishLotto(1);
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 9;

    const calculator = new ProfitCalculator({
      lottos,
      winningNumber,
      bonusNumber,
    });

    const result = { three: 1, four: 0, five: 0, fiveWithBonus: 0, six: 0 };
    const profit = "500";

    expect(calculator.getResultAndProfit()).toEqual([result, profit]);
  });

  test("구매한 로또 2개 중 숫자 4개가 일치하는 로또가 1개 있으면 수익은 2500%이다.", () => {
    const store = new LottoStore();

    mockRandoms([
      [1, 2, 3, 4, 12, 13],
      [10, 21, 22, 23, 34, 43],
    ]);

    const lottos = store.publishLotto(2);
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 9;

    const calculator = new ProfitCalculator({
      lottos,
      winningNumber,
      bonusNumber,
    });

    const result = { three: 0, four: 1, five: 0, fiveWithBonus: 0, six: 0 };
    const profit = "2500";

    expect(calculator.getResultAndProfit()).toEqual([result, profit]);
  });

  test("구매한 로또 3개 중 숫자 5개가 일치하고, 보너스 번호는 일치하지 않는 경우 수익은 50000% 이다.", () => {
    const store = new LottoStore();

    mockRandoms([
      [1, 2, 3, 4, 5, 13],
      [10, 21, 22, 23, 34, 43],
      [13, 14, 15, 16, 17, 18],
    ]);

    const lottos = store.publishLotto(3);
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 9;

    const calculator = new ProfitCalculator({
      lottos,
      winningNumber,
      bonusNumber,
    });

    const result = { three: 0, four: 0, five: 1, fiveWithBonus: 0, six: 0 };
    const profit = "50000";

    expect(calculator.getResultAndProfit()).toEqual([result, profit]);
  });

  test("구매한 로또 8개 중 숫자 5개가 일치하고, 보너스 번호도 일치하는 경우 수익은 375000% 이다.", () => {
    const store = new LottoStore();

    mockRandoms([
      [1, 22, 23, 24, 25, 26],
      [1, 20, 30, 40, 41, 43],
      [10, 21, 22, 23, 34, 43],
      [13, 14, 15, 16, 17, 18],
      [1, 2, 3, 4, 5, 9],
      [31, 32, 33, 34, 35, 36],
      [4, 14, 24, 34, 44, 45],
      [7, 8, 9, 10, 11, 12],
    ]);

    const lottos = store.publishLotto(8);
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 9;

    const calculator = new ProfitCalculator({
      lottos,
      winningNumber,
      bonusNumber,
    });

    const result = { three: 0, four: 0, five: 0, fiveWithBonus: 1, six: 0 };
    const profit = "375000";

    expect(calculator.getResultAndProfit()).toEqual([result, profit]);
  });

  test("구매한 로또 18개 중 숫자 6개가 모두 일치할 경우 수익은 11111111.11% 이다.", () => {
    const store = new LottoStore();

    mockRandoms([
      [10, 11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27],
      [28, 29, 30, 31, 32, 33],
      [8, 9, 10, 11, 23, 45],
      [7, 9, 15, 17, 29, 35],
      [1, 5, 14, 15, 18, 29],
      [6, 7, 18, 29, 38, 40],
      [17, 28, 30, 33, 38, 41],
      [13, 15, 27, 36, 38, 40],
      [4, 16, 19, 22, 28, 32],
      [5, 12, 15, 20, 27, 39],
      [10, 13, 17, 28, 39, 45],
      [2, 8, 16, 21, 28, 30],
      [4, 5, 17, 22, 30, 43],
      [3, 8, 24, 29, 38, 45],
      [7, 25, 27, 34, 38, 45],
      [1, 2, 3, 4, 5, 6],
    ]);

    const lottos = store.publishLotto(18);
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 9;

    const calculator = new ProfitCalculator({
      lottos,
      winningNumber,
      bonusNumber,
    });

    const result = { three: 0, four: 0, five: 0, fiveWithBonus: 0, six: 1 };
    const profit = "11111111.11";

    expect(calculator.getResultAndProfit()).toEqual([result, profit]);
  });

  test("구매한 로또 9개 중, 숫자 3개 일치 1개, 4개 일치 1개가 있는 경우 수익은 611.11%", () => {
    const store = new LottoStore();

    mockRandoms([
      [2, 4, 5, 21, 28, 30],
      [10, 11, 12, 13, 14, 15],
      [4, 16, 19, 22, 28, 32],
      [5, 12, 15, 20, 27, 39],
      [10, 13, 17, 28, 39, 45],
      [4, 5, 17, 22, 30, 43],
      [3, 8, 24, 29, 38, 45],
      [7, 25, 27, 34, 38, 45],
      [1, 2, 3, 4, 9, 18],
    ]);

    const lottos = store.publishLotto(9);
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 9;

    const calculator = new ProfitCalculator({
      lottos,
      winningNumber,
      bonusNumber,
    });

    const result = { three: 1, four: 1, five: 0, fiveWithBonus: 0, six: 0 };
    const profit = "611.11";

    expect(calculator.getResultAndProfit()).toEqual([result, profit]);
  });
});
