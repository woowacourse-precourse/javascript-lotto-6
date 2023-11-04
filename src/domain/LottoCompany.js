import { Random } from '@woowacourse/mission-utils';
import { GAME_RULE_NUMBER, RANKING } from '../constant/constants.js';
import {
  getInputBonusNumber,
  getInputPurchasingMoney,
  getInputWinningNumbers,
  printPurchasedAmount,
  printRankingList,
} from '../util/Utils.js';

class LottoCompany {
  async lottoProcess() {
    this.money = await getInputPurchasingMoney();
    this.winningNumbers = await getInputWinningNumbers();
    this.bonusNumber = await getInputBonusNumber();
    await this.generateUserLottos();
    await this.checkWinner();
  }

  generateUserLottos() {
    const amount = this.money / GAME_RULE_NUMBER.price;
    this.lottos = this.getUserLottoNumbers(amount);
    printPurchasedAmount(amount, this.lottos);
  }

  checkWinner() {
    const accordList = this.checkAccord();
    const rankingList = accordList.map((number, idx) => {
      if (number <= 2) return RANKING.nothing;
      if (number === 5 && this.lottos[idx].includes(this.bonusNumber)) {
        return RANKING['5+1'];
      }
      return RANKING[number];
    });
    rankingList.sort((a, b) => b - a);

    printRankingList(rankingList);
  }

  checkAccord() {
    const accordList = this.lottos.map(
      (lotto) =>
        lotto.filter((number) => this.winningNumbers.match(number)).length,
    );
    return accordList;
  }

  getUserLottoNumbers(amount) {
    const userLottoNumbers = [];
    for (let i = 0; i < amount; i += 1) {
      userLottoNumbers.push(this.generateLottoNumber().sort((a, b) => a - b));
    }
    return userLottoNumbers;
  }

  generateLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      GAME_RULE_NUMBER.min,
      GAME_RULE_NUMBER.max,
      GAME_RULE_NUMBER.length,
    );
  }

  getWinningNumbers() {
    return this.winningNumbers;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

export default LottoCompany;
