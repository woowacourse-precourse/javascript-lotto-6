import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// @NOTE - 구입 금액 입력, 당첨 번호 입력, 보너스 번호 입력 로직 구현
// @NOTE - app.play()로 하지 말 것

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

})