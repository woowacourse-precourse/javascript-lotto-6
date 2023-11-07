import WinningStatistic from './WinningStatistic.js';
import {
  LOTTO_PRICE,
  LOTTO_MATCH,
  PRIZE_MONEY,
  LOTTO_RANK,
} from '../src/constants/gameinfo.js';

class LotteryPrize {
  #lottoBundle;
  #winningNumbers;
  #bonusNumber;

  constructor(lottoBundle, winningNumbers, bonusNumber) {
    this.#lottoBundle = [...lottoBundle];
    this.#winningNumbers = [...winningNumbers];
    this.#bonusNumber = bonusNumber;
  }

  getWinningStatistics() {
    const prize = this.#calculatePrize();
    const earningRate = this.#getEarningRates(prize);
    const winningStatistic = new WinningStatistic(
      prize.firstPrize,
      prize.secondePrize,
      prize.thirdPrize,
      prize.fourthPrize,
      prize.fifthPrize,
      earningRate
    );
    return winningStatistic;
  }

  #calculatePrize() {
    const prize = {
      firstPrize: 0,
      secondePrize: 0,
      thirdPrize: 0,
      fourthPrize: 0,
      fifthPrize: 0,
    };
    this.#lottoBundle.forEach((lotto) => {
      const lottoRank = this.#getLottoRank(
        lotto.getNumbers(),
        this.#winningNumbers,
        this.#bonusNumber
      );
      switch (lottoRank) {
        case LOTTO_RANK.first:
          prize.firstPrize += 1;
          break;
        case LOTTO_RANK.second:
          prize.secondePrize += 1;
          break;
        case LOTTO_RANK.third:
          prize.thirdPrize += 1;
          break;
        case LOTTO_RANK.fourth:
          prize.fourthPrize += 1;
          break;
        case LOTTO_RANK.fifth:
          prize.fifthPrize += 1;
          break;
      }
    });

    return { ...prize };
  }

  #getLottoRank(lottoNumbers, winningNumbers, bonusNumber) {
    switch (this.#getMatchCount(lottoNumbers, winningNumbers)) {
      case LOTTO_MATCH.firstPrize:
        return LOTTO_RANK.first;
      case LOTTO_MATCH.secondOrThird:
        if (this.#isBonusNumberMatch(lottoNumbers, bonusNumber)) {
          return LOTTO_RANK.second;
        }

        return LOTTO_RANK.third;
      case LOTTO_MATCH.fourth:
        return LOTTO_RANK.fourth;
      case LOTTO_MATCH.fifth:
        return LOTTO_RANK.fifth;
      default:
        return LOTTO_RANK.none;
    }
  }

  #getMatchCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.reduce((matchCount, lottoNumber) => {
      if (winningNumbers.includes(lottoNumber)) {
        return matchCount + 1;
      }

      return matchCount;
    }, 0);
  }

  #isBonusNumberMatch(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }

  #getEarningRates({
    firstPrize,
    secondePrize,
    thirdPrize,
    fourthPrize,
    fifthPrize,
  }) {
    const totalPrizeMoney =
      firstPrize * PRIZE_MONEY.first +
      secondePrize * PRIZE_MONEY.second +
      thirdPrize * PRIZE_MONEY.third +
      fourthPrize * PRIZE_MONEY.fourth +
      fifthPrize * PRIZE_MONEY.fifth;
    const lottoCount = this.#lottoBundle.length;
    const earingRate = (totalPrizeMoney / (lottoCount * LOTTO_PRICE)) * 100;
    return Number(earingRate).toFixed(1);
  }
}
export default LotteryPrize;
