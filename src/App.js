import { MissionUtils } from "@woowacourse/mission-utils";
import Purchase from "./Purchase";

class App {
  /**1. 구입금액을 입력받는다.
   * - 구입금액은 숫자여야 한다.
   * - 구입금액은 1000원 단위로 나누어 떨어져야 한다.
   * - 발행한 로또 수량 및 번호를 출력한다.(로또 번호는 오름차순으로 정렬) */
  async getPurchasePrice() {
    const input = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    const purchase = new Purchase(input);

    //발행한 로또 수량 및 번호를 출력
    //MissionUtils.Console.print(`${input / 1000}개를 구매했습니다.`);
  }

  async play() {}
}

export default App;
