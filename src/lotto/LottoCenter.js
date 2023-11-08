import { LOTTO_RANK } from '../constant/constant.js';

class LottoCenter {
  #publishedLottoList = [];

  #lottoResultsList = {};

  constructor(publishedLottoList) {
    this.#publishedLottoList = publishedLottoList;
    this.#lottoResultsList = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  tryPrintAllLottoNumbers() {
    this.#publishedLottoList.forEach((lotto) => {
      lotto.printNumbers();
    });
  }

  inspectLottoWinningStatus(winningNumbers, bonusNumber) {
    this.#publishedLottoList.forEach((lotto) => {
      this.#setLottoResultList(lotto.getRank(winningNumbers, bonusNumber));
    });
  }

  #setLottoResultList(rank) {
    switch (rank) {
      case LOTTO_RANK.first.rank:
        this.#lottoResultsList[LOTTO_RANK.first.rank] += 1;
        break;
      case LOTTO_RANK.second.rank:
        this.#lottoResultsList[LOTTO_RANK.second.rank] += 1;
        break;
      case LOTTO_RANK.third.rank:
        this.#lottoResultsList[LOTTO_RANK.third.rank] += 1;
        break;
      case LOTTO_RANK.fourth.rank:
        this.#lottoResultsList[LOTTO_RANK.fourth.rank] += 1;
        break;
      case LOTTO_RANK.fifth.rank:
        this.#lottoResultsList[LOTTO_RANK.fifth.rank] += 1;
        break;
    }
  }

  getLottoResultsList() {
    return { ...this.#lottoResultsList };
  }
}

export default LottoCenter;