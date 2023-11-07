import { Console } from "@woowacourse/mission-utils";
import { calculateRevenue } from "./Result.js";
import { OUTPUT_MESSAGE, RESULT_MESSAGE, LOTTO_PRICE } from "./Text.js";

// 3. 구입금액만큼 횟수 저장하기
export const printTiceks = (money) => {
  let lottoTicket = money / `${LOTTO_PRICE}`;
  Console.print(`${lottoTicket}${OUTPUT_MESSAGE.BUY_COUNT}`);
  return lottoTicket;
};
// 7. 로또 구매 결과 출력
export const printLottos = (lottos) => {
  lottos.map((el) => Console.print("[" + el.join(", ") + "]"));
};

// 13. 결과 출력
export const printResult = (rank, money) => {
  let revenue = calculateRevenue(rank, money);
  Console.print(`${RESULT_MESSAGE.GUAID}`);
  Console.print(
    `${RESULT_MESSAGE.THREE.replace("($count$)", `${rank.three}`)}`
  );
  Console.print(`${RESULT_MESSAGE.FOUR.replace("($count$)", `${rank.four}`)}`);
  Console.print(`${RESULT_MESSAGE.FIVE.replace("($count$)", `${rank.five}`)}`);
  Console.print(
    `${RESULT_MESSAGE.FIVE_BONUS.replace("($count$)", `${rank.bonus}`)}`
  );
  Console.print(`${RESULT_MESSAGE.SIX.replace("($count$)", `${rank.six}`)}`);
  Console.print(
    `${RESULT_MESSAGE.REVENUE.replace("($number$)", `${revenue}`)}`
  );
};
