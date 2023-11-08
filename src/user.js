import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

function isNumber(input) {
  return typeof input === "number" && !isNaN(+input);
}

function isLottoNumber(input) {
  return input >= 1 && input <= 45;
}

export async function userPriceInput() {
  while (true) {
      try {
        const price = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        if (!isNumber(price)) {
          throw new Error("[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.");
        }
        const cnt = price / 1000;
        const change = price % 1000;
        return [cnt, change];
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
  }
}

export async function userWinningInput() {
  while (true) {
      try {
        let winNumber = await MissionUtils.Console.readLineAsync(
          "당첨 번호를 입력해 주세요."
        );
        winNumber = winNumber.split(",").map(Number);
        return new Lotto(winNumber);
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
  }
}

export async function userBonusInput() {
  while (true) {
      try {
        let bonusNumber = await MissionUtils.Console.readLineAsync(
          "보너스 번호를 입력해 주세요.\n"
        );
        if (!isNumber(bonusNumber)) {
          throw new Error(
            "[Error] 잘못된 형식입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다."
          );
        }
        if (!isLottoNumber(bonusNumber)) {
          throw new Error(
            "[Error] 잘못된 로또 번호 입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다."
          );
        }
        return bonusNumber;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
  }
}
