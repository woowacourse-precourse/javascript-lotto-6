import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";
import Output from "../Output/Output";
import LottoCount from "../domain/LottoCount";
import Lottos from "../domain/Lottos";
import WinningNumber from "../domain/WinningNumber";

class LottoController {
  #lottoCount;
  #lottos;
  #winningNumber;

  constructor() {}

  async LottoStart() {
    await this.requestPurchaseAmount();
  }

  async requestPurchaseAmount() {
    const purchaseAmount = await Input.lottoPurchaseAmount();
    await this.purchasedLottoCount(purchaseAmount);
  }

  async purchasedLottoCount(inputPurchaseAmount) {
    this.#lottoCount = new LottoCount(inputPurchaseAmount);
    Output.printLottoCount(this.#lottoCount.getLottoCount());

    this.#lottos = new Lottos(this.#lottoCount.getLottoCount());
    Output.printLottos(this.#lottos.getLottos());

    await this.requestWinningNumber();
  }

  async requestWinningNumber() {
    const winningNumber = await Input.lottoWinningNumber();
    this.#winningNumber = new WinningNumber(winningNumber);

    await this.requestBonusNumber();
  }

  async requestBonusNumber() {
    const bonusNumber = await Input.lottoBonusNumber(
      this.#winningNumber.getWinningNumber()
    );
    Console.print(bonusNumber);
    Console.print(typeof bonusNumber);
  }
}

export default LottoController;
