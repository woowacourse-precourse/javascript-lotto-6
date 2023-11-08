import Lotto from "./Lotto";
import LottoRandomNumberGenerator from "../utils/LottoRandomNumberGenerator";

class Lottos {
  #lottos = [];

  /** 로또 번호 생성 **/
  constructor(lottoCount) {
    for (let i = 0; i < lottoCount; i += 1) {
      this.#lottos.push(
        new Lotto(LottoRandomNumberGenerator.generate()).getLotto()
      );
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
