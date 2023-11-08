import { Random } from '@woowacourse/mission-utils';
import PURCHASE_UNIT from '../constants/PurchaseUnit.js';
import LOTTO_NUMBER from '../constants/LottoNumber.js';
import PRIZE_MONEY from '../constants/PrizeMoney.js';
import {
  FIFTH_PLACE,
  FOURTH_PLACE,
  JACKPOT,
  LOSE,
} from '../constants/NumberForConsideringWin.js';
import { PERCENT, ROUND_SECOND_DECIMAL_PLACE } from '../constants/Utils.js';

class GameUtils {
  static dividedByThousand(amount) {
    return amount / PURCHASE_UNIT;
  }

  static createRandomUniqueSixNumberFromOneToForthFive() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.FIRST,
      LOTTO_NUMBER.LAST,
      LOTTO_NUMBER.COUNT,
    );
  }

  static sortRandomNumberInAscendingOrder(randomNumbers) {
    randomNumbers.sort((a, b) => a - b);
  }

  static seperateNumbersByComma(numbers) {
    const numbersTypeString = numbers.split(',');
    return numbersTypeString.map((string) => Number(string));
  }

  static isNotFromOneToFourtyFive(number) {
    return number < LOTTO_NUMBER.FIRST || number > LOTTO_NUMBER.LAST;
  }

  static checkDuplicateInList(list, element) {
    return list.indexOf(element) !== list.lastIndexOf(element);
  }

  static getDifferenceElements(lottoTicket, winningNumbers) {
    const difference = lottoTicket.filter(
      (number) => !winningNumbers.includes(number),
    );

    return difference;
  }

  static getPrize(differences, bonusNumber) {
    const rankNotConsiderBonus = this.getPrizeWithoutBonus(differences);

    if (rankNotConsiderBonus !== undefined) {
      return rankNotConsiderBonus;
    }

    return this.checkSecondOrThird(differences.pop(), bonusNumber);
  }

  static getPrizeWithoutBonus(differences) {
    return this.isNothing(differences.length);
  }

  static isNothing(differencesLength) {
    if (differencesLength > LOSE) {
      return PRIZE_MONEY.NOTHING;
    }

    return this.isFifth(differencesLength);
  }

  static isFifth(differencesLength) {
    if (differencesLength === FIFTH_PLACE) {
      return PRIZE_MONEY.FIFTH;
    }

    return this.isFourth(differencesLength);
  }

  static isFourth(differencesLength) {
    if (differencesLength === FOURTH_PLACE) {
      return PRIZE_MONEY.FOURTH;
    }

    return this.isFirst(differencesLength);
  }

  static isFirst(differencesLength) {
    if (differencesLength === JACKPOT) {
      return PRIZE_MONEY.FIRST;
    }

    return undefined;
  }

  static checkSecondOrThird(difference, bonusNumber) {
    if (difference === bonusNumber) {
      return PRIZE_MONEY.SECOND;
    }

    return PRIZE_MONEY.THIRD;
  }

  static getReturnRateRoundSecondDecimalPlace(prizeSum, tickets) {
    const persent = (prizeSum / tickets) * PERCENT;
    return persent.toFixed(ROUND_SECOND_DECIMAL_PLACE);
  }
}

export default GameUtils;
