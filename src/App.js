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
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        const purchase = new Purchase(input);

        return purchase;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
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
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        const winning = new Winning(input.split(","));

        return winning;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  /**
   * - 보너스번호는 숫자여야 한다.
   * - 보너스번호는 1개여야 한다.
   * - 보너스번호는 당첨번호와 중복되지 않아야 한다.
   * - 보너스 번호는 1~45사이의 숫자여야 한다.
   */
  async getBonus(winning) {
    while (true) {
      try {
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
        checkInputArrayRange(new Array(parseInt(input)));

        winning.setBonus(parseInt(input));

        return winning;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  //
  /*
  4. 당첨 통계를 출력한다.
  당첨 통계
  ---
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  총 수익률은 62.5%입니다.*/
  /*
- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원*/

  async play() {
    const myPurchase = await this.getPurchasePrice();
    const myWinning = await this.getWinning();
    const myBonus = await this.getBonus(myWinning);
    myWinning.setBonus(myBonus);
    myPurchase.checkLottos(myWinning);
  }
}

export default App;
