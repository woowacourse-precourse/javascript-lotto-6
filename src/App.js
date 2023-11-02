import { MissionUtils } from "@woowacourse/mission-utils";

const UNIT_OF_PURCHASE = 1000;

class GetPurchaseAmount {
  #purchase;

  constructor(purchase) {
    this.#purchaseValidate(purchase);
    this.#purchase = purchase;
  }

  #purchaseValidate(purchase) {
    const regex = /^\d+$/;
    if (!regex.test(purchase)) {
      throw new Error("[ERROR] 구매 금액은 숫자 형식만 가능합니다.");
    } else if (purchase % UNIT_OF_PURCHASE !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000으로 나누어 떨어져야 합니다.");
    }

    return purchase;
  }

  getPurchaseAmount() {
    return this.#purchase;
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
  }

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const purchaseNumber = purchaseAmount / UNIT_OF_PURCHASE;
    const getLottoNumbers = this.getRandomLottoNumbers(purchaseNumber);

    this.printPurchaseLottos(purchaseNumber, getLottoNumbers);
  }
}

export default App;
