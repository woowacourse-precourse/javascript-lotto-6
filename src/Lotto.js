import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  purchaseAmount;
  numberPurchased;
  randomLottoNumbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  async readPurchaseAmount() {
    let isValidInput = false;
    while (!isValidInput) {
      try {
        this.purchaseAmount = await MissionUtils.Console.readLineAsync(
          "구입 금액을 입력해 주세요."
        );
        const amount = parseInt(this.purchaseAmount);

        if (amount % 1000 !== 0) {
          throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
        }

        this.purchaseAmount = amount;
        this.numberPurchased = this.purchaseAmount / 1000;
        isValidInput = true;
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  lottoNumberAscendingPrint() {
    const lottoNumberArr = [];
    while (lottoNumberArr.length < 6) {
      lottoNumberArr.push(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    return lottoNumberArr.sort((a, b) => {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
  }

  lottoNumArrMultiplynumberPurchased() {
    const result = [];
    for (let i = 0; i < this.numberPurchased; i++) {
      this.randomLottoNumbers = this.lottoNumberAscendingPrint();
      result.push(this.randomLottoNumbers);
    }
    return result;
  }

  async buyLotto() {
    await this.readPurchaseAmount();
    MissionUtils.Console.print(`${this.numberPurchased}개를 구매했습니다.`);
    MissionUtils.Console.print(this.lottoNumArrMultiplynumberPurchased());
  }
}
export default Lotto;
