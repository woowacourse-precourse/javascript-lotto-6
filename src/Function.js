import { MissionUtils } from "@woowacourse/mission-utils";

export async function getPayment() {
  try {
    const PAYMENT = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return PAYMENT;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}

export async function getGuessNumber() {
  try {
    const NUMBER_GUESS = await MissionUtils.Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    return NUMBER_GUESS;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}

export async function getBonusNumber() {
  try {
    const NUMBER_BONUS = await MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return NUMBER_BONUS;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}

export function printReturnRate(prize, PAYMENT) {
  let PRIZE =
    prize[0] * 5000 +
    prize[1] * 50000 +
    prize[2] * 1500000 +
    prize[3] * 30000000 +
    prize[4] * 2000000000;
  let RATE_RETURN = ((100 * PRIZE) / PAYMENT).toFixed(1);
  MissionUtils.Console.print(`총 수익률은 ${RATE_RETURN}%입니다.`);
}
