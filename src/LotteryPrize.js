import WinningStatistic from './WinningStatistic.js';

const LOTTO_FIRSTPRIZE_MATCH_NUMBER = 6;
const LOTTO_SECOND_OR_THIRD_PRIZE_MATCH_NUMBER = 5;
const LOTTO_FOURTHPRIZE_MATCH_NUMBER = 4;
const LOTTO_FIFTHPRIZE_MATCH_NUMBER = 3;

const LOTTO_RANK_NONE = 0;
const LOTTO_RANK_FIRST = 1;
const LOTTO_RANK_SECOND = 2;
const LOTTO_RANK_THIRD = 3;
const LOTTO_RANK_FOURTH = 4;
const LOTTO_RANK_FIFTH = 5;

const PRIZE_MONEY_FIRST = 2000000000;
const PRIZE_MONEY_SECOND = 30000000;
const PRIZE_MONEY_THIRD = 1500000;
const PRIZE_MONEY_FOURTH = 50000;
const PRIZE_MONEY_FIFTH = 5000;

const LOTTO_PRICE = 1000;

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
    this.#lottoBundle.forEach((lottoNumbers) => {
      const lottoRank = this.#getLottoRank(
        lottoNumbers,
        this.#winningNumbers,
        this.#bonusNumber
      );
      switch (lottoRank) {
        case LOTTO_RANK_FIRST:
          prize.firstPrize += 1;
          break;
        case LOTTO_RANK_SECOND:
          prize.secondePrize += 1;
          break;
        case LOTTO_RANK_THIRD:
          prize.thirdPrize += 1;
          break;
        case LOTTO_RANK_FOURTH:
          prize.fourthPrize += 1;
          break;
        case LOTTO_RANK_FIFTH:
          prize.fifthPrize += 1;
          break;
      }
    });
    return { ...prize };
  }

  #getLottoRank(lottoNumbers, winningNumbers, bonusNumber) {
    switch (this.#getMatchCount(lottoNumbers, winningNumbers)) {
      case LOTTO_FIRSTPRIZE_MATCH_NUMBER:
        return LOTTO_RANK_FIRST;
      case LOTTO_SECOND_OR_THIRD_PRIZE_MATCH_NUMBER:
        if (this.#isBonusNumberMatch(lottoNumbers, bonusNumber)) {
          return LOTTO_RANK_SECOND;
        }
        return LOTTO_RANK_THIRD;
      case LOTTO_FOURTHPRIZE_MATCH_NUMBER:
        return LOTTO_RANK_FOURTH;
      case LOTTO_FIFTHPRIZE_MATCH_NUMBER:
        return LOTTO_RANK_FIFTH;
      default:
        return LOTTO_RANK_NONE;
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
      firstPrize * PRIZE_MONEY_FIRST +
      secondePrize * PRIZE_MONEY_SECOND +
      thirdPrize * PRIZE_MONEY_THIRD +
      fourthPrize * PRIZE_MONEY_FOURTH +
      fifthPrize * PRIZE_MONEY_FIFTH;
    const lottoCount = this.#lottoBundle.length;
    const earingRate = (totalPrizeMoney / (lottoCount * LOTTO_PRICE)) * 100;
    return Number(earingRate.toFixed(1));
  }
}
export default LotteryPrize;
