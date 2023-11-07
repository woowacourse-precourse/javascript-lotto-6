import { Console } from "@woowacourse/mission-utils";
import { calculateRevenue } from "./Result.js";
import { OUTPUT_MESSAGE, RESULT_MESSAGE, LOTTO_PRICE } from "./Text.js";

// 3. 구입금액만큼 횟수 저장하기
export const printTiceks = (money) => {
  let lottoTicket = money / `${LOTTO_PRICE}`;
  Console.print(`${lottoTicket}${OUTPUT_MESSAGE.BUY_COUNT}`);
  return lottoTicket;
};
