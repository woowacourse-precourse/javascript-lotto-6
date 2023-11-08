import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";
import LottoCount from "../Main/LottoCount";
import Output from "../Output/Output";

class LottoController {
  #lottoCount;
  
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

    Console.print(this.#lottoCount.getLottoCount());
  }
}

export default LottoController;