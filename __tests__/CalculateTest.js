import Calculate from "../src/Model/Calculate.js";
import Lottos from "../src/Model/Lottos.js";
import { Random } from "@woowacourse/mission-utils";

describe("Calculate 클래스 테스트", () => {
  let calculate;

  beforeEach(() => {
    const lottos = new Lottos();

    jest
      .spyOn(Random, "pickUniqueNumbersInRange")
      .mockReturnValue([1, 2, 3, 4, 5, 7]);

    lottos.createLottos(1000); 

    calculate = new Calculate(lottos, "1, 2, 3, 4, 5, 6", "7"); 
  });

  test("Caculate 객체를 생성한다. ", () => {
    expect(calculate).toBeInstanceOf(Calculate);
  });

  test("계산을 통해 옳은 결과를 생성한다. ", () => {
    calculate.caculateResults();
    const results = calculate.getResults();
    expect(results.three).toBe(0);
    expect(results.four).toBe(0);
    expect(results.five).toBe(0);
    expect(results.fiveBonus).toBe(1);
    expect(results.six).toBe(0);
  });

  test("수익률을 옳게 계산한다.", () => {
    calculate.caculateResults(); 
    calculate.calculateProfitRate(1000); 
    const profitRate = calculate.getProfitRate();
    expect(profitRate).toBe(3000000.0);
  });

    test('countMatchNumbers 메서드가 옳게 동작한다.', () => {
    const lotto = { getNumbers: () => [1, 2, 3, 4, 5, 7] };
    const matchedNumbers = calculate.countMatchNumbers(lotto);
    expect(matchedNumbers).toEqual([1, 2, 3, 4, 5]);
  });

  test('countBonusNumbers 메서드가 옳게 동작한다.', () => {
    const lotto = { getNumbers: () => [1, 2, 3, 4, 5, 7] };
    calculate.bonusNumber = 7; 
    const bonusMatch = calculate.countBonusNumbers(lotto);
    expect(bonusMatch).toBe(true);
  });

  test('countWinnings 메서드가 옳게 동작한다.', () => {
    const results = calculate.getResults();
    const matchedNumbers = [1, 2, 3, 4];
    const bonusMatch = true;
    calculate.countWinnings(matchedNumbers, bonusMatch);
    expect(results.four).toBe(1);
  });
});