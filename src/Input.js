import { LOTTO_CONSTANT, printOutput, readInput } from "./utils";

class Input {
  async handleMoney() {
    let money;
    try {
      money = await this.readMoneyBuyingLotto();
      this.money = money;
    } catch (error) {
      printOutput(error.message);
      await this.handleMoney();
    }
  }

  async readMoneyBuyingLotto() {
    const INPUT = await readInput("\n구입금액을 입력해 주세요.\n");
    this.#validLottoMoney(INPUT);
    return Number(INPUT);
  }

  #validLottoMoney(input) {
    const INPUT_NUMBER = Number(input);
    const LOTTO_PRICE = 1000;
    if (Number.isNaN(INPUT_NUMBER)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
    if (!input.trim()) {
      throw new Error("[ERROR] 공백을 입력하셨습니다.");
    }
    if (INPUT_NUMBER % LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
  }

  async handleLottoNumbers() {
    let lottoNumbers;
    try {
      lottoNumbers = await this.readLottoNumbers();
      this.lottoNumbers = lottoNumbers;
    } catch (error) {
      printOutput(error.message);
      await this.handleLottoNumbers();
    }
  }

  async readLottoNumbers() {
    const INPUT = await readInput("\n당첨 번호를 입력해 주세요.\n");
    const NUMBERS = INPUT.split(",").map(Number);
    this.#validLottoNumbers(NUMBERS);
    return NUMBERS;
  }

  #validLottoNumbers(numbers) {
    if (numbers.length !== LOTTO_CONSTANT.LOTTO_LENGTH) {
      const STRING = `[ERROR] 숫자는 ${LOTTO_CONSTANT.LOTTO_LENGTH}개를 입력해주세요.`;
      throw new Error(STRING);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자를 입력하셨습니다.");
    }
    numbers.forEach((number) => {
      this.#validNumber(number);
    });
  }

  #validNumber(number) {
    if (Number.isNaN(number)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
    if (!number) {
      throw new Error("[ERROR] 공백을 입력하셨습니다.");
    }
    if (
      number < LOTTO_CONSTANT.MIN_LOTTO_NUMBER ||
      number > LOTTO_CONSTANT.MAX_LOTTO_NUMBER
    ) {
      const STRING = `[ERROR] 숫자의 범위는 ${LOTTO_CONSTANT.MIN_LOTTO_NUMBER}~${LOTTO_CONSTANT.MAX_LOTTO_NUMBER} 이어야 합니다.`;
      throw new Error(STRING);
    }
  }

  async handleBonusNumber() {
    let bonusNumber;
    try {
      bonusNumber = await this.readBonusNumber();
      this.bonusNumber = bonusNumber;
    } catch (error) {
      printOutput(error.message);
      await this.handleBonusNumber();
    }
  }

  async readBonusNumber() {
    const INPUT = await readInput("\n보너스 번호를 입력해 주세요.\n");
    this.#validBonusNumber(INPUT);
    return Number(INPUT);
  }

  #validBonusNumber(input) {
    const INPUT_NUMBER = Number(input);

    this.#validNumber(INPUT_NUMBER);
    if (this.lottoNumbers.includes(INPUT_NUMBER)) {
      throw new Error("[ERROR] 중복된 숫자를 입력하셨습니다.");
    }
  }
}

export default Input;
