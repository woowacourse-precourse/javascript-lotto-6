import { MissionUtils } from "@woowacourse/mission-utils";
import Purchase from "./Purchase.js";
import Winning from "./Winning.js";
import {
  checkInputArrayDuplication,
  checkInputArrayLength1,
  checkInputArrayRange,
  checkInputTypeIsNumber,
} from "./Validation.js";

class App {
  /**
   * 1. 구입금액을 입력받는다.
   * - 구입금액은 숫자여야 한다.
   * - 구입금액은 1000원 단위로 나누어 떨어져야 한다.
   * - 발행한 로또 수량 및 번호를 출력한다.(로또 번호는 오름차순으로 정렬)
   * @returns Purchase 객체
   */
  async getPurchasePrice() {
    const input = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const purchase = new Purchase(input);

    return purchase;
  }

  /**
   * 2. 당첨번호를 입력받는다.
    - 당첨번호는 숫자여야 한다.
    - 당첨번호는 6개여야 한다.
    - 당첨번호는 중복되지 않아야 한다.
  - 각 당첨번호는 1~45사이의 숫자여야 한다.
   * @returns Winning 객체 
   */
  async getWinning() {
    const input = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const winning = new Winning(input.split(","));

    return winning;
  }

  /**
   * - 보너스번호는 숫자여야 한다.
   * - 보너스번호는 1개여야 한다.
   * - 보너스번호는 당첨번호와 중복되지 않아야 한다.
   * - 보너스 번호는 1~45사이의 숫자여야 한다.
   */
  async getBonus(winning) {
    const input = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    //예외처리
    //1. 보너스 번호는 숫자여야 한다.
    checkInputTypeIsNumber(input);
    //2. 보너스 번호는 1개여야 한다.
    checkInputArrayLength1(input.split(","));
    //3. 보너스 번호는 당첨번호와 중복되지 않아야 한다.
    const tmpNumbers = winning.getWinning();
    checkInputArrayDuplication([...tmpNumbers, input]);
    //4. 보너스 번호는 1~45사이의 숫자여야 한다.
    checkInputArrayRange(new Array(input).map(Number));

    winning.setBonus(input);

    return winning;
  }

  async play() {
    const myPurchase = await this.getPurchasePrice();
    const winning = await this.getWinning().then(async (res) => {
      return await this.getBonus(res);
    });
  }
}

export default App;
