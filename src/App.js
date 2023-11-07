import GameUtils from "./GameUtils.js";
import LottoGame from "./LottoGame.js";
import LottoMerchant from "./LottoMerchant.js";

class App {
  #LottoGame;
  #LottoMerchant;

  constructor() {
    this.#LottoGame = new LottoGame();
    this.#LottoMerchant = new LottoMerchant();
  }
  async play() {
    const purchaseAmount = await GameUtils.asyncRetryUntilValidInput(async () => {
        return await this.#LottoMerchant.getLottoPurchaseAmount();
    });
    const lottoTickets = this.#LottoMerchant.issueLottoTickets(purchaseAmount);

    await GameUtils.asyncRetryUntilValidInput(async () => {
      return await this.#LottoGame.inputWinningNumbers();
    })

    await GameUtils.asyncRetryUntilValidInput(async () => {
      return await this.#LottoGame.inputBonusNumber();
    })

    this.#LottoGame.matchAllLottoTicket(lottoTickets);
    this.#LottoGame.printResult(purchaseAmount);
  }
}

export default App;