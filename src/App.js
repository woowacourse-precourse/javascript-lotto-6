import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoManagement from "./LottoManagement.js";
const lottoPrice = 1000;
class App {
  constructor() {
    this.lottoManagement = new LottoManagement();
  }
  async play() {
    const purchasePrice = await this.inputPurchasePrice();
    const lottoCount = Number(purchasePrice / lottoPrice);
    const generatedLottoNumbers =
      this.lottoManagement.getLottoArray(lottoCount);
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }
  async inputPurchasePrice() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return +input;
  }
}
export default App;
