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
      "당첨 번호를 입력해 주세요.\n"
    );
    return NUMBER_GUESS;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}

export async function getBonusNumber() {
  try {
    const NUMBER_BONUS = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    return NUMBER_BONUS;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}
