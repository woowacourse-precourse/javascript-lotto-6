import { Random } from '@woowacourse/mission-utils';
import { GAME_RULE_NUMBER, INPUT_MESSAGES } from '../constant/constants.js';
import {
  getUserInput,
  printPurchasedAmount,
  printPurchasedLottos,
} from '../util/Utils.js';

class LottoShop {
  async lottoPurchase() {
    await this.receiveUserMoney();
    await this.generateUserLottos();
    await this.receiveWinningNumbers();
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
}

const user = new LottoShop();
user.lottoPurchase();
