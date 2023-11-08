import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers) {
      this.#validate(numbers);
      this.#numbers = numbers;
    }
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static checkLuckyNumber(luckyNumber) {
    const winNum = luckyNumber.split(",").map(Number);
    if (winNum.length !== 6 || winNum.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 올바른 당첨 번호를 입력해주세요.");
    }
    if (new Set(winNum).size !== winNum.length) {
      throw new Error("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    }
    return winNum;
  }

  static async showUsersLottoNumbers(countTicket) {
    const lottoNumbers = [];
    for (let i = 0; i < countTicket; i++) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(lotto);
    }
    const allLottoNumbers = lottoNumbers
      .map((lotto) => `[${lotto.join(", ")}]`)
      .join("\n");
    await MissionUtils.Console.print(allLottoNumbers);
    return lottoNumbers;
  }
}

export default Lotto;
