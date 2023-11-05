import { Random } from '@woowacourse/mission-utils';
import { GAME_RULE_NUMBER, RANKING } from '../constant/Constants.js';
import {
  getInputBonusNumber,
  getInputPurchasingMoney,
  getInputWinningNumbers,
  printPurchasedAmount,
  printRankingList,
} from '../util/Utils.js';
import Lotto from '../Lotto.js';

class LottoGame {
  async lottoProcess() {
    this.money = await getInputPurchasingMoney();
    this.winningNumbers = await getInputWinningNumbers();
    this.bonusNumber = await getInputBonusNumber(this.winningNumbers);
    this.generateUserLottos();
    this.checkWinning();
  }

  generateUserLottos() {
    const amount = this.money / GAME_RULE_NUMBER.price;
    this.lottos = this.getUserLottoNumbers(amount);
    printPurchasedAmount(amount, this.lottos);
  }

  getUserLottoNumbers(amount) {
    const userLottoNumbers = [];
    let lotto;
    for (let i = 0; i < amount; i += 1) {
      lotto = new Lotto(this.generateLottoNumber().sort((a, b) => a - b));
      userLottoNumbers.push(lotto.getNumbers());
    }
    return userLottoNumbers;
  }

  generateLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(
      GAME_RULE_NUMBER.min,
      GAME_RULE_NUMBER.max,
      GAME_RULE_NUMBER.length,
    );
    return lottoNumber;
  }

  checkWinning() {
    const accordList = this.checkAccord();
    const rankingList = accordList.map((number, idx) => {
      if (number <= 2) return RANKING.nothing;
      if (number === 5 && this.lottos[idx].includes(this.bonusNumber)) {
        return RANKING['5+1'];
      }
      return RANKING[number];
    });
    printRankingList(rankingList);
  }

  checkAccord() {
    const accordList = this.lottos.map(
      (lotto) =>
        lotto.filter((number) => this.winningNumbers.match(number)).length,
    );
    return accordList;
  }

  getWinningNumbers() {
    return this.winningNumbers;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

export default LottoGame;
