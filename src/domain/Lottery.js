import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import throwInputErrors from '../error/error.js';
import {
  commomValidator,
  checkPayMoneyUnit,
  checkTheNumberOfWinningNumber,
  checkWinningNumberRange,
  checkOverlapInWinningNumbers,
  checkOverlapOnBonusNumber,
} from '../utils/validators.js';
import {
  readlinePayMoneyNumberAsync,
  readlineWinningNumberListAync,
  readlineBonusNumberAsync,
} from '../view/inputView.js';
import {
  outputIssueComment,
  outputLottoNummbers,
  outputGreetingStatisticComment,
  outputStatisticCommnet,
  outputEarningRateCommnet,
} from '../view/outputView.js';
import {
  LOTTO_PRICE,
  MAKING_PERCENTAGE,
  CHANGE_ONE_DIGIT,
  THE_FIRST_DECIMAL_PLACE,
  DIGIT_FOR_THOUSAND,
  PRIZE_FOR_THREE_MATCH,
  PRIZE_FOR_FOUR_MATCH,
  PRIZE_FOR_FIVE_MATCH,
  PRIZE_FOR_FIVE_AND_BONUS_MATCH,
  PRIZE_FOR_SIX_MATCH,
} from '../constants/lotteryConstants.js';

export default class Lottery {
  #payMoney;

  winningNumberList;

  bonusNumber;

  lottoList;

  winningCount;

  #prizes;

  constructor() {
    this.#payMoney = 0;
    this.winningNumberList = [];
    this.bonusNumber = 0;
    this.lottoList = [];
    this.winningCount = [0, 0, 0, 0, 0]; // 3,4,5,5+보너스,6개 일치
    this.#prizes = [
      PRIZE_FOR_THREE_MATCH,
      PRIZE_FOR_FOUR_MATCH,
      PRIZE_FOR_FIVE_MATCH,
      PRIZE_FOR_FIVE_AND_BONUS_MATCH,
      PRIZE_FOR_SIX_MATCH,
    ];
  }

  async readPayMoney() {
    this.#payMoney = await readlinePayMoneyNumberAsync();

    throwInputErrors(() => {
      commomValidator(this.#payMoney);
      checkPayMoneyUnit(this.#payMoney);
    }, 'payMoney');

    // make Lottos.
    this.pay(this.#payMoney);
  }

  async readWinningNumberList() {
    this.winningNumberList = await readlineWinningNumberListAync();
    // exception check

    throwInputErrors(() => {
      checkTheNumberOfWinningNumber(this.winningNumberList);

      this.winningNumberList.forEach((targetNumber) => {
        commomValidator(targetNumber);
        checkWinningNumberRange(targetNumber);
        checkOverlapInWinningNumbers(this.winningNumberList, targetNumber);
      });
    }, 'winningNumberList');
  }

  async readBonusNumber() {
    this.bonusNumber = await readlineBonusNumberAsync();

    throwInputErrors(() => {
      commomValidator(this.bonusNumber);
      checkWinningNumberRange(this.bonusNumber);
      checkOverlapOnBonusNumber(this.winningNumberList, this.bonusbNumer);
    }, 'bonusNumber');
  }

  issue(numberOfLotto) {
    for (let i = 0; i < numberOfLotto; i += 1) {
      this.lottoList.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    outputIssueComment(numberOfLotto);
  }

  pay(payMoney) {
    const numberOfLotto = payMoney / LOTTO_PRICE;

    this.issue(numberOfLotto);

    outputLottoNummbers(this.lottoList);
  }

  matchNumbers() {
    const matchResults = this.lottoList.map((lotto) =>
      lotto.checkWinning(this.winningNumberList, this.bonusNumber),
    );

    matchResults.forEach((eachResult) => {
      const resultCaseIndex = eachResult.winning - 3;
      if (resultCaseIndex < 0) return;

      const ALL = 4;
      const five = eachResult.bonus ? 3 : 2;
      const resultCase = [resultCaseIndex, resultCaseIndex, five, ALL];
      this.winningCount[resultCase[resultCaseIndex]] += 1;
    });
  }

  calculateEarningRate() {
    return (
      Math.round(
        (this.winningCount
          .map((eachCount, index) => eachCount * this.#prizes[index])
          .reduce((acc, cur) => acc + cur, 0) /
          this.#payMoney) *
          MAKING_PERCENTAGE *
          CHANGE_ONE_DIGIT,
      ) / CHANGE_ONE_DIGIT
    ).toFixed(THE_FIRST_DECIMAL_PLACE);
  }

  stringifyPrizeList() {
    return this.#prizes.map((eachPrize) => {
      const prizeDigitStringList = eachPrize.toString().split('').reverse();
      return prizeDigitStringList
        .map((digitString, index) => {
          if (index % DIGIT_FOR_THOUSAND === 0 && index > 0)
            return `${digitString},`;
          return digitString;
        })
        .reverse()
        .join('');
    });
  }

  printWinnigCount() {
    outputGreetingStatisticComment();
    const prizeStringList = this.stringifyPrizeList();
    outputStatisticCommnet(this.winningCount, prizeStringList);
    const earningRate = this.calculateEarningRate();
    outputEarningRateCommnet(earningRate);
  }
}
