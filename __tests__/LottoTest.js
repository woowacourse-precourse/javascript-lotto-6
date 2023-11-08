import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
import { lottoChecker } from "../src/LottoChecker.js";
import { checkLottoAmount, checkLottoBonusNumber } from "../src/LottoInput.js";
import { lottoMachine } from "../src/LottoMachine.js";
import { printLottoStatistics } from "../src/LottoOutput.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 구입 금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => checkLottoAmount('3500')).toThrow("[ERROR]");
  });

  test("구입 개수만큼 로또를 발행한다.", () => {
    expect(lottoMachine(6).length).toEqual(6);
  });

  test("보너스 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => checkLottoBonusNumber([1, 2, 3, 4, 5, 6], 'abc')).toThrow("[ERROR]");
  });

  test("보너스 번호가 1 ~ 45의 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => checkLottoBonusNumber([1, 2, 3, 4, 5, 6], 48)).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복된 경우 예외가 발생한다. ", () => {
    expect(() => checkLottoBonusNumber([1, 2, 3, 4, 5, 6], 5)).toThrow("[ERROR]");
  });

  test("당첨 번호와 랜덤 로또 번호 사이의 일치 개수, 보너스 번호의 위치를 반환한다.", () => {
    const randomNumbers = [
      [4, 8, 20, 28, 40, 44],
      [2, 3, 4, 12, 35, 42],
      [2, 3, 6, 12, 20, 33]
    ];
    const winningNumbers = [2, 3, 4, 12, 35, 40];
    const bonusNumber = 42;
    expect(lottoChecker(randomNumbers, winningNumbers, bonusNumber))
      .toEqual([2, "5+bonus", 3]);
  });

  test("일치 개수에 따라 당첨 항목을 분리한다.", () => {
    const matchedCounts = [2, "5+bonus", 3, "5+bonus", 5];
    expect(printLottoStatistics(matchedCounts))
      .toEqual({
        "3": { "price": 5000, "text": "3개 일치 (5,000원)", "value": 1 },
        "4": { "price": 50000, "text": "4개 일치 (50,000원)", "value": 0 },
        "5": { "price": 1500000, "text": "5개 일치 (1,500,000원)", "value": 1 },
        "5+bonus": { "price": 30000000, "text": "5개 일치, 보너스 볼 일치 (30,000,000원)", "value": 2 },
        "6": { "price": 2000000000, "text": "6개 일치 (2,000,000,000원)", "value": 0 }
      });
  });
});