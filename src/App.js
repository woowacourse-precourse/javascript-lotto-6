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
      this.lottoResultChecker.inputWinningLottoNum()
    );
    const bonusNumber = this.lottoResultChecker.convertToNum(
      this.lottoResultChecker.inputBonusNumber()
    );
  }

  async inputPurchasePrice() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return +input;
  }
}
export default App;
