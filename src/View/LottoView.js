import { Console } from "@woowacourse/mission-utils";
import { INFO_MSG, WINNING_INFO, WINNING_RANKS } from "../constants";

class LottoView {
  /**
   * 사용자에게 로또 구입 금액을 입력받고 입력값을 리턴하는 메소드
   * @returns {string}
   */
  async get_amount() {
    const INPUT_AMOUNT = await Console.readLineAsync(INFO_MSG.AMOUNT_INPUT);
    return INPUT_AMOUNT;
  }

  /**
   * 사용자에게 당첨 로또 번호를 입력받고 입력값을 리턴하는 메소드
   * @returns {string}
   */
  async get_winning_numbers() {
    const INPUT_WINNING = await Console.readLineAsync(INFO_MSG.WINNING_INPUT);
    return INPUT_WINNING;
  }

  /**
   * 사용자에게 당첨 로또 보너스 번호를 입력받고 입력값을 리턴하는 메소드
   * @returns {string}
   */
  async get_bonus() {
    const INPUT_BONUS = await Console.readLineAsync(INFO_MSG.BONUS_INPUT);
    return INPUT_BONUS;
  }

  /**
   * 구입한 로또 목록을 출력하는 메소드
   * @param {Lotto[]} lottos
   */
  print_lottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.get_numbers().join(", ")}]`);
    });
  }

  /**
   * 등수별 당첨 횟수 객체를 전달받아 이를 출력하는 메소드
   * @param {Object} winning_result
   */
  print_winning_result(winning_result) {
    Console.print("당첨 통계");
    Console.print("---");

    Object.values(WINNING_RANKS).forEach((rank) =>
      Console.print(`${WINNING_INFO[rank]} - ${winning_result[rank]}개`)
    );
  }

  /**
   * 수익률을 출력하는 메소드
   * @param {number} rate
   */
  print_rate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default LottoView;
