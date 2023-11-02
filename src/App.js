import { MissionUtils } from "@woowacourse/mission-utils";

const UNIT_OF_PURCHASE = 1000;

class GetPurchaseAmount {
  #purchase;

  constructor(purchase) {
    this.#purchaseValidate(purchase);
    this.#purchase = purchase;
  }

  #purchaseValidate(purchase) {
    const regexNumber = /^\d+$/;
    if (!regexNumber.test(purchase)) {
      throw new Error("[ERROR] 구매 금액은 숫자 형식만 가능합니다.");
    } else if (purchase % UNIT_OF_PURCHASE !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000으로 나누어 떨어져야 합니다.");
    }
  }

  getPurchaseAmount() {
    return this.#purchase;
  }
}

class GetWinningNumber {
  #winningNumbers;

  constructor(winningNumbers) {
    this.#winningNumberValidateForm(winningNumbers);
    this.#winningNumberValidateDuplicate(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  #winningNumberValidateForm(winningNumbers) {
    const regexNumber = /^\d+$/;
    winningNumbers.split(",").forEach((winningNumber) => {
      if (!regexNumber.test(winningNumber)) {
        throw new Error(
          "[ERROR] 쉼표(,)로 구분된 숫자 형식의 입력만 가능합니다.",
        );
      }
    });
  }

  #winningNumberValidateDuplicate(winningNumbers) {
    const regexDuplicatedInLottoRange =
      /^(?!.*(\d+)(?=.*\b\1\b))(?:(?:[1-9]|[1-3]\d|4[0-5])(?:,|$)){6}$/;
    if (!regexDuplicatedInLottoRange.test(winningNumbers)) {
      throw new Error(
        "[ERROR] 1~45 사이의 중복되지 않는 6개의 숫자를 입력해주세요.",
      );
    }
  }

  getWinningNumber() {
    return this.#winningNumbers;
  }
}

class GetBonusNumber {
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#bonusNumberValidateForm(bonusNumber);
    this.#bonusNumberValidateDuplicate(winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #bonusNumberValidateForm(bonusNumber) {
    const regexNumber = /^(?:[1-9]|[1-3]\d|4[0-5])$/;
    if (!regexNumber.test(bonusNumber)) {
      throw new Error("[ERROR] 1~45 사이의 숫자 형식의 입력만 가능합니다.");
    }
  }

  #bonusNumberValidateDuplicate(winningNumber, bonusNumber) {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 같을 수 없습니다.");
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

class App {
  async getPurchaseAmount() {
    try {
      const purchaseInput = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n",
      );
      const checkPurchaseInput = new GetPurchaseAmount(purchaseInput);
      const getPurchaseInput = checkPurchaseInput.getPurchaseAmount();

      return getPurchaseInput;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return await this.getPurchaseAmount();
    }
  }

  getRandomLottoNumbers(purchaseNumber) {
    const lottoNumbers = [];
    for (let i = 0; i < purchaseNumber; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = numbers.sort((a, b) => a - b);
      lottoNumbers.push(sortedNumbers);
    }

    return lottoNumbers;
  }

  printPurchaseLottos(purchaseNumber, lottoNumbers) {
    MissionUtils.Console.print(`\n${purchaseNumber}개를 구매했습니다.`);
    lottoNumbers.forEach((lottoNumber) =>
      MissionUtils.Console.print(lottoNumber),
    );
    MissionUtils.Console.print("");
  }

  async getWinningNumbers() {
    try {
      const winningNumbers = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n",
      );
      const checkWinningNumbers = new GetWinningNumber(winningNumbers);
      const getWinningNumber = checkWinningNumbers.getWinningNumber();

      return getWinningNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return await this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumber) {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n",
      );
      const checkBonusNumber = new GetBonusNumber(winningNumber, bonusNumber);
      const getBonusNumber = checkBonusNumber.getBonusNumber();

      return getBonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return await this.getBonusNumber(winningNumber);
    }
  }

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const purchaseNumber = purchaseAmount / UNIT_OF_PURCHASE;
    const getLottoNumbers = this.getRandomLottoNumbers(purchaseNumber);

    this.printPurchaseLottos(purchaseNumber, getLottoNumbers);

    const winningNumber = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumber);
  }
}

export default App;
