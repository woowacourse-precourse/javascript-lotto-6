import LottoValidate from "./validate/LottoValidate.js";
import UserView from './view/UserView.js';
import { LOTTO_LANK } from './comm/Util.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      new LottoValidate().randomNumberValidate(number);
    });
  }

  userOutputPurchaseLotto() {
    new UserView().userOutputPurchaseLottoNumber(this.#numbers);
  }

  resultLottoPrize = (winningNumber, bonusNumber) => {
    const COMPARE_NUMBER_COUNT = [];
    const COMPARE_BONUS_NUMBER_COUNT = [];
    for(const LOTTO_ARR of this.#numbers){
        const COMPARE_LOTTO_COUNT = this.compareLottoNumber(LOTTO_ARR, winningNumber);
        COMPARE_NUMBER_COUNT.push(COMPARE_LOTTO_COUNT);
        COMPARE_BONUS_NUMBER_COUNT.push(LOTTO_ARR.filter(number => number === Number(bonusNumber)).length);
    }
    const resultRank = this.resultLottoRank(COMPARE_NUMBER_COUNT,COMPARE_BONUS_NUMBER_COUNT);
    console.log(resultRank);
    return resultRank;
  }

  compareLottoNumber = (purchaseLotto, winningNumber) => {
    return purchaseLotto.filter(
        number => winningNumber.includes(number)
    ).length;
  }

  resultLottoRank = (numberCount, bonusNumberCount) => {
    const RESULT_RANK = [];
    numberCount.forEach((number, index) => {
      const bonusNumber = bonusNumberCount[index];
      if(number === 6){
        RESULT_RANK.push(LOTTO_LANK.FIRST_RANK);
      } else if(number+bonusNumber === 6) {
        RESULT_RANK.push(LOTTO_LANK.SECOND_RANK);
      } else if(number+bonusNumber === 5) {
        RESULT_RANK.push(LOTTO_LANK.THIRD_RANK);
      } else if(number+bonusNumber === 4) {
        RESULT_RANK.push(LOTTO_LANK.FOURTH_RANK);
      } else if(number+bonusNumber === 3) {
        RESULT_RANK.push(LOTTO_LANK.FIFTH_RANK);
      }
    });
    return RESULT_RANK;
  }
}

export default Lotto;
