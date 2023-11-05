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

    Console.print(`${lottoCount}개를 구매했습니다.`);

    generatedLottoNumbers.forEach((lotto) => {
      lotto.print();
    });

    const winningNumbers = this.lottoResultChecker.convertToArr(
      await this.lottoResultChecker.inputWinningLottoNum()
    );
    const bonusNumber = this.convertToNum(await this.inputBonusNumber());
    this.checkValidateInputBonus(bonusNumber);
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
    if (this.inputLottoNumArr.includes(bonus)) {
      throw new Error("[ERROR] 입력한 당첨 번호 외 숫자를 입력해 주세요.");
    }
  }
}
export default App;
