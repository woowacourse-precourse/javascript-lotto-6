import { MissionUtils } from "@woowacourse/mission-utils";
import { validationUserMoney } from "../validation.js";
import { lottoNumbers } from "../lotto-number.js";
import {
  inputMoney,
  lottoWinnerNumbers,
  lottoBonusNumber,
} from "../user-input.js";

const Console = MissionUtils.Console;
const LOTTOPRICE = 1000;

const PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.COUNT = 0;
    this.BONUS = false;
    this.PRIZE;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  compareNumber(winnerNumbers) {
    this.#numbers.forEach((number) =>
      this.qulificationWinNumber(winnerNumbers, number)
    );
  }

  qulificationWinNumber(winnerNumbers, number) {
    if (winnerNumbers.includes(number)) {
      this.COUNT++;
    }
  }

  compareBonusNumber(bonusNumber) {
    if (this.#numbers.includes(+bonusNumber)) {
      this.BONUS = true;
    }
  }

  async inputMoney() {
    const userMoney = await Console.readLineAsync("구입 금액을 입력해주세요.");
    return userMoney;
  }

  validationUserMoney(userMoney) {
    if (!+userMoney) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (userMoney / LOTTOPRICE - Math.floor(userMoney / LOTTOPRICE)) {
      throw new Error("[ERROR] 1000원 단위로 입금해주세요.");
    }
  }

  static async buy() {
    let userMoney;
    let whileBreak = true;
    while (whileBreak) {
      try {
        userMoney = await inputMoney();
        whileBreak = false;
      } catch (error) {
        Console.print(error.message);
      }
    }
    const manyLottos = userMoney / LOTTOPRICE;
    const lottoArray = Array(manyLottos).fill();
    return lottoArray;
  }
}

export default Lotto;
