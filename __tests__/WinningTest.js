import WinningLotto from "../src/models/WinningLotto.js";
import Reward from "../src/models/Reward.js";
import { Random } from "@woowacourse/mission-utils";

describe("당첨 번호 클래스 테스트", () => {
  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    let winningNumbers = Random.pickUniqueNumbersInRange(1, 45, 7);
    expect(() => {
        new WinningLotto(winningNumbers);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    let winningNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    winningNumbers[1] = winningNumbers[0];
    expect(() => {
        new WinningLotto(winningNumbers);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 1부터 45사이의 범위를 넘으면 예외가 발생한다.", () => {
    let winningNumbers = Random.pickUniqueNumbersInRange(-100, 100, 6);
    expect(() => {
        new WinningLotto(winningNumbers);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 당첨 번호와 중복되면 예외가 발생한다.", () => {
    let winningNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    let bonusNumber = winningNumbers[0]
    expect(() => {
        WinningLotto.validate_bonus(winningNumbers, bonusNumber);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1부터 45사이의 정수가 아니면 예외가 발생한다.", () => {
    let winningNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    let bonusNumber = Random.pickUniqueNumbersInRange(-100, 100, 1);
    expect(() => {
        WinningLotto.validate_bonus(winningNumbers, bonusNumber);
    }).toThrow("[ERROR]");
  });

  test('주어진 로또 번호와 당첨 번호 및 보너스 번호를 비교하여 올바른 결과를 반환한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const winningLotto = new WinningLotto(winningNumbers);
    const lottoList = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [1, 2, 3, 7, 8, 9],[1, 2, 3, 4, 5, 7]];
    const bonusNumber = 7;
  
    const result = winningLotto.checkMatch(lottoList, bonusNumber);
    expect(result.get('6')).toBe(1);
    expect(result.get('5+')).toBe(1);
    expect(result.get('5')).toBe(0);
    expect(result.get('4')).toBe(0);
    expect(result.get('3')).toBe(1);
  });

  test('당첨 결과를 바탕으로 올바른 수익률을 반환한다.', () => {
    const matchCountsesult = new Map([['3', 2],['4', 0],['5', 0], ['5+', 1],['6', 1]]);
    const purchaseAmount = 4000;
    const EarningRate = Reward.getEarningRate(matchCountsesult, purchaseAmount);
    expect(EarningRate).toBe("50750250.0");
  });
});
