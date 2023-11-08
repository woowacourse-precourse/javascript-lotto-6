import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const money = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    // 예외처리
    if (isNaN(money)) throw new Error("[ERROR] 구입금액은 숫자여야 합니다.");
    if (parseInt(money / 1000) !== money / 1000) throw new Error("[ERROR] 구입금액은 1000원 단위여야 합니다.");
    if (money == 0) throw new Error("[ERROR] 구입금액은 0원 이상이어야 합니다.");
  }
}

export default App;
