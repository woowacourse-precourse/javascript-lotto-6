import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
  async handleMoney() {
    let money;
    try {
      money = await this.readMoneyBuyingLotto();
      this.money = money;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      money = await this.handleMoney();
    }
  }

  async readMoneyBuyingLotto() {
    const INPUT =
      await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.#validLottoMoney(INPUT);
    return Number(INPUT);
  }

  #validLottoMoney(input) {
    const INPUT_NUMBER = Number(input);
    if (Number.isNaN(INPUT_NUMBER))
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (!input.trim()) throw new Error("[ERROR] 공백을 입력하셨습니다.");
    if (INPUT_NUMBER % 1000 !== 0)
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
  }

  async handleLottoNumbers() {
    let lottoNumbers;
    try {
      lottoNumbers = await this.readLottoNumbers();
      this.lottoNumbers = lottoNumbers;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      lottoNumbers = await this.handleLottoNumbers();
    }
  }

  async readLottoNumbers() {
    const INPUT =
      await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const NUMBERS = INPUT.split(",").map(Number);
    this.#validLottoNumbers(NUMBERS);
    return NUMBERS;
  }

  #validLottoNumbers(numbers) {
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

  async handleBonusNumber() {
    let bonusNumber;
    try {
      bonusNumber = await this.readBonusNumber();
      this.bonusNumber = bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      bonusNumber = await this.handleBonusNumber();
    }
  }

  async readBonusNumber() {
    const INPUT =
      await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
    this.#validBonusNumber(INPUT);
    return Number(INPUT);
  }

  #validBonusNumber(input) {
    const BONUS_NUMBER = Number(input);
    if (Number.isNaN(BONUS_NUMBER))
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (!input) throw new Error("[ERROR] 공백을 입력하셨습니다.");
    if (BONUS_NUMBER < 1 || BONUS_NUMBER > 45)
      throw new Error("[ERROR] 숫자의 범위는 1~45 이어야 합니다.");
    if (this.lottoNumbers.includes(BONUS_NUMBER))
      throw new Error("[ERROR] 중복된 숫자를 입력하셨습니다.");
  }
}

export default Input;
