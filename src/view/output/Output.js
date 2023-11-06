import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../../constant/LottoMessage.js';
import LOTTO from '../../constant/Lotto.js';
import PRIZES from '../../constant/Prizes.js';
import addMoneyDelimiter from '../../utils/addMoneyDelimiter.js';

const Output = (superClass) =>
  class OutputClass extends superClass {
    // TODO: 리펙터
    static printResultHeader() {
      Console.print(LOTTO_MESSAGE.resultHeader);
      Console.print(LOTTO_MESSAGE.resultHeaderLine);
    }

    static printLottoCount(count) {
      Console.print(LOTTO_MESSAGE.lottoCount(count));
    }

    static printLottos(lottos) {
      const messages = [];

      lottos.forEach((lotto) =>
        messages.push(LOTTO_MESSAGE.singleLotto(lotto)),
      );

      Console.print(messages.join(LOTTO_MESSAGE.nextLine));
    }

    static printYieldRate(yieldRate) {
      Console.print(LOTTO_MESSAGE.yield(yieldRate));
    }

    static printError(errorMessage) {
      Console.print(errorMessage);
    }

    static printPrizeCount(prizeCount) {
      const messages = prizeCount.map((matchCount, i) =>
        OutputClass.#prizeCountMessage(matchCount, i),
      );

      Console.print(messages.join('\n'));
    }

    static #prizeCountMessage(matchCount, idx) {
      const matchNotificationMessage = this.#getMatchNotificationMessage(idx);
      const prizeMessage = this.#getPrizeMessage(idx);
      const matchCountMessage = LOTTO_MESSAGE.matchCount(matchCount);

      return matchNotificationMessage + prizeMessage + matchCountMessage;
    }

    static #getMatchNotificationMessage(idx) {
      const matchCountBasis = this.#getMatchCountBasis(idx);
      const matchNotificationMessage = LOTTO_MESSAGE.matchNotification(
        matchCountBasis,
        this.#isBonusMatch(idx),
      );

      return matchNotificationMessage;
    }

    static #getPrizeMessage(idx) {
      const delimitedMoney = addMoneyDelimiter(PRIZES[idx]);
      const prizeMessage = LOTTO_MESSAGE.prize(delimitedMoney);

      return prizeMessage;
    }

    static #getMatchCountBasis(idx) {
      if (this.#isWin(idx)) return LOTTO.count;
      if (this.#isBonusMatch(idx)) return LOTTO.count - 1;
      if (this.#isRemainValidMatch(idx)) return LOTTO.minMatchCount + idx;
    }

    static #isWin(idx) {
      return idx === LOTTO.prizeCount - 1;
    }

    static #isBonusMatch(idx) {
      return idx === LOTTO.prizeCount - 2;
    }

    static #isRemainValidMatch(idx) {
      return idx < LOTTO.prizeCount - 2;
    }
  };

export default Output;
