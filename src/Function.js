import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";

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

export function printResult(prize) {
  MissionUtils.Console.print("\n당첨 통계\n___");
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${prize[0]}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${prize[1]}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${prize[2]}개`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${prize[3]}개`
  );
}
