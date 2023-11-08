import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";
import LottoCount from "../Main/LottoCount";
import Output from "../Output/Output";
import Lottos from "../Main/Lottos";
import WinningNumber from "../Main/WinningNumber";
import BonusNumber from "../domain/BonusNumber";

class LottoController {
  #lottoCount;
  #lottos;
  #winningNumber;

  constructor() {}

  async LottoStart() {
    await this.getLottoPrice();
  }

  async getLottoPrice() {
    const LOTTO_PRICE = await Input.lottoPrice();
    await this.getLottoCount(LOTTO_PRICE);
  }

  async getLottoCount(input) {
    this.#lottoCount = new LottoCount(input);

    Output.printLottoCount(this.#lottoCount.getLottoCount());

    this.#lottos = new Lottos(this.#lottoCount.getLottoCount());
    Output.printLottos(this.#lottos.getLottos());

    await this.requestWinningNumber();
  }

  async requestWinningNumber() {
    const winningNumber = await Input.lottoWinningNumber();
    this.#winningNumber = new WinningNumber(winningNumber);
    Console.print(this.#winningNumber.getWinningNumber());
  }

  async requestBonusNumber() {
    const bonusNumber = await Input.lottoBonusNumber();
    this.#winningNumber = new BonusNumber(bonusNumber);
    Console.print(this.#winningNumber.getBonusNumber());
  }
}

export default LottoController;