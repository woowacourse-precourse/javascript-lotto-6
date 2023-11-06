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

  static async readLottoNumbers() {
    const INPUT = await MissionUtils.Console.readLineAsync();
    const NUMBERS = INPUT.split(",").map(Number);
    this.validLottoNumbers(NUMBERS);
    return INPUT;
  }

  static validLottoNumbers(numbers) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 숫자는 6개를 입력해주세요.");
    if (new Set(numbers).size !== numbers.length)
      throw new Error("[ERROR] 중복된 숫자를 입력하셨습니다.");
    numbers.forEach((number) => {
      if (Number.isNaN(number)) throw new Error("[ERROR] 숫자만 입력해주세요.");
      if (!number) throw new Error("[ERROR] 공백을 입력하셨습니다.");
      if (number < 1 || number > 45)
        throw new Error("[ERROR] 숫자의 범위는 1~45 이어야 합니다.");
    });
  }
}

export default Input;
