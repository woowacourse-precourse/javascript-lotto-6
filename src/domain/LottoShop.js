import { Random } from '@woowacourse/mission-utils';
import {
  GAME_RULE_NUMBER,
  INPUT_MESSAGES,
  RANKING,
} from '../constant/constants.js';
import {
  getUserInput,
  printPurchasedAmount,
  printPurchasedLottos,
  printRankingList,
} from '../util/Utils.js';

class LottoShop {
  async lottoPurchase() {
    await this.receiveUserMoney();
    await this.generateUserLottos();
    await this.receiveWinningNumbers();
    await this.receiveBonusNumber();
    await this.checkWinner();
  }

  async receiveUserMoney() {
    this.money = await getUserInput(INPUT_MESSAGES.purcahsingMoney);
  }

  generateUserLottos() {
    const amount = this.money / GAME_RULE_NUMBER.price;
    this.lottos = this.getUserLottoNumbers(amount);
    printPurchasedAmount(amount);
    printPurchasedLottos(this.lottos);
  }

  async receiveWinningNumbers() {
    this.winningNumbers = await getUserInput(
      INPUT_MESSAGES.lottoWinningNumbers,
    );
  }

  async receiveBonusNumber() {
    this.bonusNumber = await getUserInput(INPUT_MESSAGES.lottoBonusNumber);
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
    return rankingList;
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

const user = new LottoShop();
user.lottoPurchase();

export default LottoShop;
