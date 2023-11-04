import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

class LottoTicket {
  #lottoTickets = [];

  constructor(purchaseAmount) {
    for (let i = 0; i < purchaseAmount / 1000; i++) {
      const LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      this.#lottoTickets.push(new Lotto(LOTTO_NUMBERS));
    }
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }
}

class LottoMachine {
  constructor() {
    this.winningNumbers = new Set(); // 각 번호 간 중복 방지
    this.bonusNumber = null;
  }

  async #getWinningNumbers() {
    let winningNumbers;
    while (true) {
      const USER_INPUT =
        await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");
      winningNumbers = this.#parseAndSortWinningNumbers(USER_INPUT);

      if (this.#isValideNumberArray(winningNumbers)) {
        return winningNumbers;
      }

      MissionUtils.Console.print(
        "[ERROR] 당첨 번호는 중복 없는 6개의 숫자여야 하며, 모든 숫자는 1~45 사이여야 합니다."
      );
    }
  }

  #parseAndSortWinningNumbers(input) {
    return input
      .split(",")
      .map((number) => parseInt(number.trim(), 10))
      .sort((a, b) => a - b);
  }

  // 숫자들 배열의 유효성 검사
  #isValideNumberArray(numbers) {
    const areAllnumbersValid = numbers.every((number) =>
      this.#isValidNumber(number)
    );
    const hasCorrectLength = numbers.length === 6;
    const hasAllUniqueNumbers = new Set(numbers).size === 6;
    return areAllnumbersValid && hasCorrectLength && hasAllUniqueNumbers;
  }

  // 단일 숫자의 유효성 검사
  #isValidNumber(number) {
    return !isNaN(number) && number >= 1 && number <= 45;
  }
}

export default Lotto = { Lotto, LottoTicket };
