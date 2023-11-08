import { MissionUtils } from "@woowacourse/mission-utils";

function isNumber(input) {
  return typeof input === "number" && !isNaN(input);
}

function isLottoNumber(input) {
  return input >= 1 && input <= 45;
}

export async function userPriceInput() {
  try {
    const price = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    if (!this.isNumber(price)) {
      throw new Error("[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.");
    }
    const cnt = price / 1000;
    const change = price % 1000;
    return [cnt, change];
  } catch (error) {
    throw error;
  }
}

export async function userWinningInput() {
  try {
    let winNumber = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    winNumber = winNumber.split(",").map(Number);
    if (!this.isNumber(winNumber)) {
      throw new Error("[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.");
    }
    if (!this.isLottoNumber(winNumber)) {
      throw new Error(
        "[ERROR] 잘못된 로또 번호 입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다."
      );
    }
  } catch (error) {
    throw error;
  }
}

export async function userBonusInput() {
  try {
    let bonusNumber = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    if (!this.isNumber(bonusNumber)) {
      throw new Error(
        "[Error] 잘못된 형식입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다."
      );
    }
    if (!this.isLottoNumber(bonusNumber)) {
      throw new Error(
        "[Error] 잘못된 로또 번호 입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다."
      );
    }
  } catch (error) {
    throw error;
  }
}
