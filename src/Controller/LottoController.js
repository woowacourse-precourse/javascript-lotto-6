import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";
import LottoCount from "../Main/LottoCount";
import Output from "../Output/Output";
import Lottos from "../domain/Lottos";

class LottoController {
  #lottoCount;
  #lottos;

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
    Console.print(winningNumber);
    Console.print(typeof winningNumber);
  }
}

export default LottoController;