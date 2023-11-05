import { MissionUtils } from "@woowacourse/mission-utils";
import * as func from "./Function.js";

export function paymentCheck(PAYMENT) {
  let BLANK_PATTERN = /^\s+|\s+$/g;
  if (PAYMENT.replace(BLANK_PATTERN, "") == "") {
    MissionUtils.Console.print("[ERROR] 지불 비용이 공백입니다");
    throw new Error();
  }
  BLANK_PATTERN = /[\s]/g;
  if (BLANK_PATTERN.test(PAYMENT)) {
    MissionUtils.Console.print("[ERROR] 지불 비용에 공백이 있습니다");
    throw new Error();
  }
  if (isNaN(PAYMENT)) {
    MissionUtils.Console.print("[ERROR] 지불 비용은 숫자여야 합니다.");
    throw new Error();
  }
  if (PAYMENT % 1000 !== 0) {
    MissionUtils.Console.print(
      "[ERROR] 지불 비용은 1000원으로 나누어 떨어져야 합니다"
    );
    throw new Error();
  }
}

export function guessNumberCheck(NUMBER_GUESS) {
  if (NUMBER_GUESS.length !== 6) {
    MissionUtils.Console.print("[ERROR] 당첨 번호는 6개여야 합니다.");
    throw new Error();
  }
  for (let number of NUMBER_GUESS) {
    if (isNaN(number)) {
      MissionUtils.Console.print(
        "[ERROR] 당첨 번호는 숫자로만 입력이 되어야합니다."
      );
      throw new Error();
    }
    if (new Set(NUMBER_GUESS).size !== NUMBER_GUESS.length) {
      MissionUtils.Console.print("[ERROR] 당첨 번호엔 중복이 없어야 합니다.");
      throw new Error();
    }
    if (number > 45 || number < 1) {
      MissionUtils.Console.print(
        "[ERROR] 당첨 번호는 1~45 범위의 숫자여야 합니다."
      );
      throw new Error();
    }
  }
}

export function bonusNumberCheck(NUMBER_GUESS, NUMBER_BONUS) {
  if (isNaN(NUMBER_BONUS)) {
    MissionUtils.Console.print("[ERROR] 입력된 보너스 번호가 숫자가 아닙니다");
    throw new Error();
  }
  if (NUMBER_GUESS.includes(Number(NUMBER_BONUS))) {
    MissionUtils.Console.print(
      "[ERROR] 보너스 번호는 입력된 당첨 번호와 달라야 합니다"
    );
    throw new Error();
  }
  if (NUMBER_BONUS > 45 || NUMBER_BONUS < 1) {
    MissionUtils.Console.print(
      "[ERROR] 당첨 번호는 1~45 범위의 숫자여야 합니다."
    );
    throw new Error();
  }
}
