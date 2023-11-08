import { GRADE, MATCHED_COUNT } from '../constants/lotto.js';
import paramType from '../lib/paramType/src/paramType.js';

export default class LottoDrawChecker {
  #winningNumbers;
  #bonusNumber;
  static drawTable = Object.freeze({
    [MATCHED_COUNT.SIX]: (_) => GRADE.FIRST,
    [MATCHED_COUNT.FIVE]: (haveBonusNumber) =>
      haveBonusNumber ? GRADE.SECOND : GRADE.THIRD,
    [MATCHED_COUNT.FOUR]: (_) => GRADE.FOURTH,
    [MATCHED_COUNT.THREE]: (_) => GRADE.FIFTH,
  });

  constructor(
    winningNumbers,
    bonusNumber,
    _0 = paramType(winningNumbers, Array),
    _1 = paramType(bonusNumber, 'number'),
  ) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getDrawResult(lottoList, _ = paramType(lottoList, Array)) {
    const matchingCountArray = this.#calculateMatchingCount(lottoList);
    const drawResultTemplete = this.#drawResultTemplete();

    return matchingCountArray.reduce(
      (drawTemplete, { matchingCount, haveBonusNumber }) => {
        if (this.#isQquang(matchingCount)) return drawTemplete;
        const drawGrade =
          LottoDrawChecker.drawTable[matchingCount](haveBonusNumber);
        drawTemplete[drawGrade] += 1;

        return drawTemplete;
      },
      drawResultTemplete,
    );
  }

  #calculateMatchingCount(lottoList, _ = paramType(lottoList, Array)) {
    return lottoList.map((lotto) => ({
      matchingCount: this.#matchingNumberCount(lotto),
      haveBonusNumber: this.#haveBonusNumber(lotto),
    }));
  }

  #matchingNumberCount(lotto, _ = paramType(lotto, Array)) {
    return lotto.filter((number) => this.#winningNumbers.includes(number))
      .length;
  }

  #haveBonusNumber(lotto, _ = paramType(lotto, Array)) {
    return lotto.includes(this.#bonusNumber);
  }

  #isQquang(
    matchingLottoNumberCount,
    _ = paramType(matchingLottoNumberCount, 'number'),
  ) {
    return matchingLottoNumberCount <= MATCHED_COUNT.QQUANG;
  }

  #drawResultTemplete() {
    return Object.seal({
      [GRADE.FIRST]: 0,
      [GRADE.SECOND]: 0,
      [GRADE.THIRD]: 0,
      [GRADE.FOURTH]: 0,
      [GRADE.FIFTH]: 0,
    });
  }
}
