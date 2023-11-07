import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import WORD from "./lib/constants/word";

class User {
  lottos;
  constructor(userLottoQuanitiy) {
    this.lottos = this.#generateLotto(userLottoQuanitiy);
  }

  #generateLotto(userLottoQuanitiy) {
    const lottoList = this.createLottoList(userLottoQuanitiy);
    return lottoList;
  }

  createLottoList(userLottoQuanitiy) {
    let lottoList = [];

    for (let i = 0; i < userLottoQuanitiy; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(
        WORD.MINNUMBER,
        WORD.MAXNUMBER,
        WORD.PICKNUMBER
      ).sort((a, b) => a - b);

      const lotto = new Lotto(randomNumber);
      lottoList.push(lotto);
    }

    return lottoList.map((lotto) => lotto.getLottoNumber());
  }

  getLotto() {
    return this.lottos.map((lotto) => lotto);
  }
}

export default User;
