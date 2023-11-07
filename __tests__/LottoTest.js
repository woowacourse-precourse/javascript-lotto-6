import Lotto from "../src/Lotto.js";
import Model from "../src/model/Model.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

  test("로또 번호는 오름차순으로 정렬이 되어야 한다.", () => {
    // given
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    const LOTTO_RANDOM_NUMBERS = [3, 2, 6, 9, 1, 42];
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue(LOTTO_RANDOM_NUMBERS);

    // when
    const model = new Model();
    model.makeLotto("1000");

    // then
    expect(model.getLotties[0].lottoNumbers).toEqual(LOTTO_RANDOM_NUMBERS.sort((a, b) => a - b));
  });
});
