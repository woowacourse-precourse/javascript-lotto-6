import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";

class LottoController {
  constructor() {}

  async LottoStart() {
    await this.getLottoPrice();
  }

  async getLottoPrice() {
    const LOTTO_PRICE = await Input.lottoPrice();
    await this.getLottoCount(LOTTO_PRICE);
  }

  async getLottoCount(input) {
    
  }
}

export default LottoController;