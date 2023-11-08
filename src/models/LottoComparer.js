import PRIZE_LEVEL from '../constants/prizeLevel.js';

const { FIFTH, FOURTH, THIRD_OR_SECOND, FIRST } = PRIZE_LEVEL;

class LottoComparer {
  lottos;

  WinningNumbers;

  bonusNumber;

  lottoWinnerPrize;

  LIMIT_COUNT = 3;

  constructor(lottos, lottoWinnerPrize) {
    this.lottos = lottos;
    this.lottoWinnerPrize = lottoWinnerPrize;
  }

  start() {
    this.lottos.forEach(lotto => {
      const { hasBonusNumber, correctCount } = this.compareLottoNumbers(lotto);
      if (correctCount < this.LIMIT_COUNT) return;
      this.updatePrize(hasBonusNumber, correctCount);
    });
  }

  compareLottoNumbers(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const correctCount = this.countCorrectNumbers(lottoNumbers);
    const hasBonusNumber = this.checkBonusNumber(lottoNumbers);

    return { correctCount, hasBonusNumber };
  }

  updatePrize(hasBonusNumber, correctCount) {
    const matchedPrize = this.findMatchedPrize(hasBonusNumber, correctCount);
    matchedPrize.count += 1;
  }

  findMatchedPrize(hasBonusNumber, correctCount) {
    const { fifthPrize, fourthPrize, thirdPrize, secondPrize, firstPrize } =
      this.lottoWinnerPrize;
    const prizeMapping = {
      [FIFTH]: fifthPrize,
      [FOURTH]: fourthPrize,
      [THIRD_OR_SECOND]: hasBonusNumber ? secondPrize : thirdPrize,
      [FIRST]: firstPrize,
    };
    const matchedPrize = prizeMapping[correctCount];
    return matchedPrize;
  }

  checkBonusNumber(lottoNumbers) {
    return lottoNumbers.some(number => number === this.bonusNumber);
  }

  countCorrectNumbers(lottoNumbers) {
    const correctNumbers = lottoNumbers.filter(number =>
      this.WinningNumbers.getNumbers().includes(number),
    );

    return correctNumbers.length;
  }
}
export default LottoComparer;
