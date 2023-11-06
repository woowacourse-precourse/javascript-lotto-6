import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
  static async readMoneyBuyingLotto() {
    const INPUT = await MissionUtils.Console.readLineAsync();
    this.validLottoMoney(INPUT);
    return INPUT;
  }

  static validLottoMoney(input) {
    const INPUT_NUMBER = Number(input);
    if (Number.isNaN(INPUT_NUMBER))
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (!input.trim()) throw new Error("[ERROR] 공백을 입력하셨습니다.");
    if (INPUT_NUMBER % 1000 !== 0)
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
  }
}

export default Input;
