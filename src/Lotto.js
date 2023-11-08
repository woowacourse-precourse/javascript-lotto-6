import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  purchaseAmount;
  numberPurchased;
  randomLottoNumbers;
  isValidWinningNumber;

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

  async enterWinningNumber() {
    let isValidInput = false;
    while (!isValidInput) {
      try {
        const winningNumber = await MissionUtils.Console.readLineAsync(
          "당첨 번호를 입력해 주세요. 숫자의 구분은 쉼표(,)로 합니다."
        ); //1,2,3,4,5,6
        this.isValidWinningNumber = winningNumber.split(","); //['1','2','3','4','5','6']
        this.exceptionHandlingCommaSix();
        this.exceptionHandling45();
        isValidInput = true;
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  exceptionHandlingCommaSix() {
    if (this.isValidWinningNumber.length !== 6) {
      throw new Error(
        "[ERROR] 쉼표(,)로 구분하여 6개의 당첨 번호를 입력해주세요."
      );
    }
  }

  exceptionHandling45() {
    for (let i = 0; i < this.isValidWinningNumber.length; i++) {
      if (this.isValidWinningNumber[i] > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  async buyLotto() {
    await this.readPurchaseAmount();
    MissionUtils.Console.print(`${this.numberPurchased}개를 구매했습니다.`);
    MissionUtils.Console.print(this.lottoNumArrMultiplynumberPurchased());
    await this.enterWinningNumber();
  }
}
export default Lotto;
