import Random from './MakeLottoNumber.js';
import MatchNumber from './MatchNumber.js';

class LottoController {
  constructor(count) {
    this.lottos = [];
    this.printLottos = [];
    this.numbersMatchingResult = [];
    this.bonusMatchingResult = [];
    this.createObject(count);
  }

  createObject(count) {
    for (let i = 0; i < count; i += 1) {
      this.lottos.push(new MatchNumber(Random.makeNumber()));
    }
  }

  checkIfNumbersMatch(winning) {
    this.lottos.forEach((lotto) =>
      this.numbersMatchingResult.push(lotto.findMatchingNumbers(winning)),
    );
  }

  checkIfBonusMatch(bonus) {
    this.lottos.forEach((lotto) => this.bonusMatchingResult.push(lotto.findMatchingBonus(bonus)));
  }

  printLottoNumber() {
    this.lottos.forEach((lotto) => this.printLottos.push(lotto.printUserLottoNumbers()));
    return this.printLottos;
  }

  sixnumberResult() {
    return this.numbersMatchingResult;
  }

  bonusResult() {
    return this.bonusMatchingResult;
  }
}

export default LottoController;
