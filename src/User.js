import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import WORD from "./lib/constants/word";

class User {
  lottoList;

  constructor(userLottoQuanitiy) {
    this.lottoList = this.#generateLotto(userLottoQuanitiy);
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

    return lottoList;
  }

  getLotto() {
    return this.lottoList;
  }
}

export default User;
