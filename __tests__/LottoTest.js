import Lotto from "../src/Lotto.js";
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

  test("출력 확인", () => {
    const rn = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    console.log(rn);
  });

  test("구입금액 예외 확인", () => {
    const price = "3067";
    let result = "GOOD";
    if (isNaN(price)) {
      result = "ERROR";
    }
    if (parseInt(price) % 1000 != 0) {
      result = "ERROR";
    }
    console.log(result);
  });

  // 아래에 추가 테스트 작성 가능
});
