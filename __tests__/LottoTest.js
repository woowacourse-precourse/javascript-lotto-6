import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
import App from "../src/App.js";
import WinningLotto from "../src/classes/WinningLotto.js";
import Util from "../src/classes/util.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

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
  test("로또 번호 6자리 숫자 생성 테스트", () => {

    const lottoNumbers = Lotto.createNumber();
    const result = lottoNumbers.length;

    expect(result).toBe(6);
  })
  test("로또 번호 맞은 수 만큼 COUNT 값 업데이트 테스트", () => {
    const winningNumber = [3, 4, 5, 6, 1, 2];
    const lottoNumber = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto(lottoNumber);
    lotto.compareNumber(winningNumber);
    const result = lotto.COUNT;

    expect(result).toBe(6);
  });

  test("보너스 번호 맞으면 BONUS 속성값 업데이트 테스트", () => {
    const bonusNumber = 3;
    const lottoNumber = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto(lottoNumber);
    lotto.compareBonusNumber(bonusNumber);
    const result = lotto.BONUS;

    expect(result).toBe(true);
  });
});
