import LottoInterface from "./LottoInterface/index.js";
import LottoManager from "./LottoManager/index.js";

class App {
  #lottoInterface;

  #lottoManager;

  constructor() {
    this.#lottoInterface = new LottoInterface();
    this.#lottoManager = new LottoManager();
  }

  async play() {
    // TODO: 구입금액 입력: interface
    const amountToPurchase = await this.#lottoInterface.readAmountToPurchase();
    // TODO: 로또 발급: manager
    const lottoes = this.#lottoManager.issueLottoes(amountToPurchase);
    // TODO: 발급한 로또 출력: interface
    // TODO: 당첨 로또 번호 입력: interface
    const answer2 = await this.#lottoInterface.readWinningNumbers();
    // TODO: 보너스 번호 입력: interface
    const answer3 = await this.#lottoInterface.readBonusNumber();
    // TODO: 로또 추첨: manager
    // TODO: 로또 당첨 통계 계산: manager
    // TODO: 로또 당첨 통계 출력: interface
  }
}

export default App;
