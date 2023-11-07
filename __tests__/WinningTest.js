import WinningLotto from "../src/models/WinningLotto.js";
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
});
