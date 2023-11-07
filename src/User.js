import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import WORD from "./lib/constants/word";

class User {
  lottoList;

  #rank;

  constructor(userLottoQuanitiy) {
    this.lottoList = this.#generateLotto(userLottoQuanitiy);
    this.#rank = {
      fifthRank: 0,
      fourthRank: 0,
      thirdRank: 0,
      secondRank: 0,
      firstRank: 0,
    };
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

  getRank(lottoNumber, bonusNumber) {
    this.lottoList.forEach((lotto) => {
      const rank = lotto.raffleNumber(lottoNumber, bonusNumber);
      if (rank === WORD.NOTING) return;
      this.#rank[rank] += 1;
    });
  }
}

export default User;
