import { ERR_MESSAGE } from '../src/constants/message';
import Lotto from '../src/domain/Lotto';

describe("보너스 번호 입력 테스트", () => {
  test("보너스 점수가 숫자가 아니면 예외가 발생한다.", () => {
    const lotto = new Lotto([1,2,3,4,5,6]);
    expect(() => lotto.validateBonusNum('십구')).toThrow(ERR_MESSAGE.notNum);
  });

  test("보너스 점수가 로또 번호의 범위를 벗어나면 예외가 발생한다.", () => {
    const lotto = new Lotto([1,2,3,4,5,6]);
    expect(() => lotto.validateBonusNum(50)).toThrow(ERR_MESSAGE.notUnderFourtyFive);
  });

  test("입력한 당첨 번호에 보너스 점수가 포함되어있으면 예외가 발생한다.", () => {
    const lotto = new Lotto([1,2,3,4,5,6]);
    expect(() => lotto.validateBonusNum(5)).toThrow(ERR_MESSAGE.notDuplicated);
  });
});