import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoManagement from "./LottoManagement.js";
import LottoResultChecker from "./LottoResultChecker.js";

const lottoPrice = 1000;
class App {
  constructor() {
    this.lottoManagement = new LottoManagement();
    this.lottoResultChecker = new LottoResultChecker();
  }
  async play() {
    const purchasePrice = await this.inputPurchasePrice();
    const lottoCount = Number(purchasePrice / lottoPrice);

    const generatedLottoNumbers =
      this.lottoManagement.getLottoArray(lottoCount);
    const generatedLottoNumbersArr = generatedLottoNumbers.map((lotto) =>
      lotto.getNumbers()
    );
    console.log(generatedLottoNumbersArr);
    Console.print(`${lottoCount}개를 구매했습니다.`);

    generatedLottoNumbers.forEach((lotto) => {
      lotto.print();
    });

    this.winningNumbers = this.lottoResultChecker.convertToArr(
      await this.lottoResultChecker.inputWinningLottoNum()
    );
    console.log(this.winningNumbers);

    const inputLottoNumErrors = new Lotto(this.winningNumbers);

    this.bonusNumber = this.convertToNum(await this.inputBonusNumber());

    this.checkValidateInputBonus(this.bonusNumber);

    const includedbonusArr = this.countBonuses(generatedLottoNumbers);

    this.matchingCounts = this.lottoResultChecker.compareInputNumAndRandomNum(
      this.winningNumbers,
      generatedLottoNumbersArr
    );
    this.lottoResultChecker.countMatchingNumbers(this.matchingCounts);
  }

  async inputPurchasePrice() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return +input;
  }

  async inputBonusNumber() {
    return await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }

  convertToNum(bonus) {
    return Number(bonus);
  }

  checkValidateInputBonus(bonus) {
    if (isNaN(Number(bonus)) || bonus < 1 || bonus > 45) {
      throw new Error(
        "[ERROR] 1부터 45 사이의 숫자 한 개만 입력이 가능합니다."
      );
    }
    if (bonus % 1 !== 0) {
      throw new Error("[ERROR] 자연수만 입력이 가능합니다.");
    }
    if (this.winningNumbers.includes(bonus)) {
      throw new Error("[ERROR] 입력한 당첨 번호 외 숫자를 입력해 주세요.");
    }
  }
  countBonuses(randomArrs) {
    const bonusArray = Array.from({ length: randomArrs.length }, () => 0);

    for (let i = 0; i < randomArrs.length; i++) {
      if (randomArrs[i].getNumbers().includes(this.bonusNumber)) {
        bonusArray[i] += 1;
      }
    }

    return bonusArray;
  }
}
export default App;
