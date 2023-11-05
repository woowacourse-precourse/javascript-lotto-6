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

  countMatchNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.has(number)).length;
  }

  getLottoNumbers() {
    return [...this.#numbers];
  }
}

class LottoPurchase {
  async #getLottoAmount() {
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
    const USER_INPUT_PRICE = parseInt(USER_INPUT, 10);
    return USER_INPUT_PRICE;
  }

  #validateAmount(lottoAmount) {
    if (
      isNaN(lottoAmount) ||
      !lottoAmount ||
      lottoAmount < 1000 ||
      lottoAmount % 1000 !== 0
    ) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
    }
  }

  async #purchaseLottoAmount() {
    let purchaseAmount;

    while (true) {
      try {
        purchaseAmount = await this.#getLottoAmount();
        this.#validateAmount(purchaseAmount);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return purchaseAmount;
  }

  async askPurchaseLottoAmount() {
    return this.#purchaseLottoAmount();
  }
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
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const USER_INPUT_NUMBERS = USER_INPUT.split(",")
      .map((number) => parseInt(number.trim(), 10))
      .sort((a, b) => a - b);
    return USER_INPUT_NUMBERS;
  }

  async #askWinningNumbers() {
    let winningNumbers;

    while (true) {
      try {
        winningNumbers = await this.#getWinningNumbers();
        this.#validateNumbersArray(winningNumbers);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return winningNumbers;
  }

  // 숫자들 배열의 유효성 검사
  #validateNumbersArray(numbers) {
    const areAllnumbersValid = numbers.every((number) =>
      this.#validateNumber(number)
    );
    const hasCorrectLength = numbers.length === 6;
    const hasAllUniqueNumbers = new Set(numbers).size === 6;
    if (!areAllnumbersValid || !hasCorrectLength || !hasAllUniqueNumbers) {
      throw new Error(
        "[ERROR] 입력은 1~45사이의 숫자이고, 6개의 숫자여야 합니다."
      );
    }
  }

  // 단일 숫자의 유효성 검사
  #validateNumber(number) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 입력은 1~45사이의 숫자여야 합니다.");
    }
  }

  async #getBonusNumber() {
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.");
    const USER_INPUT_PRICE = parseInt(USER_INPUT, 10);
    return USER_INPUT_PRICE;
  }

  async #askBonusNumber() {
    let bonusNumber;

    while (true) {
      try {
        bonusNumber = await this.#getBonusNumber();
        this.#validateNumber(bonusNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return bonusNumber;
  }
}

export default Lotto = { Lotto, LottoTicket };
