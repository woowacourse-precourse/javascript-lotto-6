import { Random } from '@woowacourse/mission-utils';
import { INIT, ERROR_MESSAGES } from '../constants/messages.js';
import InputValidator from './InputValidator.js';
import Lotto from '../Lotto.js';

class LottoModel {
  constructor() {
    this.purchaseAmount = 0;
    this.purchasecount = 0;
    this.randomNumbers = [];
    this.luckyNumbers = [];
    this.bonusNumber = 0;
    this.matchCount = [];
    this.hasBonus = [];
    this.result = [];
  }

  setPurchaseAmount(inputPrice) {
    InputValidator.ValidPurchaseAmount(inputPrice);
    this.purchaseAmount = parseInt(inputPrice, 10);
    this.purchasecount = this.purchaseAmount / INIT.priceUnit;
  }

  generateLottoNumber() {
    const { min, max, count } = INIT.validNumber;
    return Random.pickUniqueNumbersInRange(min, max, count);
  }

  generateRandomLottoNumbers() {
    this.randomNumbers = Array.from({ length: this.purchasecount }, () => {
      const lottoNumbers = this.generateLottoNumber();
      lottoNumbers.sort((a, b) => a - b);
      return new Lotto(lottoNumbers).getNumbers();
    });
  }

  setLuckyNumbers(inputNumbers) {
    InputValidator.ValidLuckyNumber(inputNumbers);
    this.luckyNumbers = inputNumbers.split(',').map(Number);
  }

  setBonusNumber(inputNumber) {
    InputValidator.ValidBonusNumber(inputNumber);
    InputValidator.errorCondition(
      this.luckyNumbers.includes(Number(inputNumber)),
      ERROR_MESSAGES.nonOverlappingNumbers
    );
    this.bonusNumber = parseInt(inputNumber, 10);
  }

  calculateTotalMatchCount() {
    this.randomNumbers.map(randomNumber => this.calculateSingleMatchCount(randomNumber));
  }

  calculateSingleMatchCount(numbers) {
    const randomnum = 13 - new Set([...numbers, ...this.luckyNumbers, this.bonusNumber]).size;
    this.matchCount.push(randomnum);
  }

  checkBonusNumber() {
    this.randomNumbers.map(numbers => this.checkSingleBonusNumber(numbers));
  }

  checkSingleBonusNumber(number) {
    const haveit = new Set(number).has(this.bonusNumber);
    this.hasBonus.push(haveit);
  }

  filterResultCount(count) {
    return count > 2 || count === 7;
  }

  calculateResult() {
    this.result = this.matchCount
      .map((count, i) => (count === 5 && this.hasBonus[i] ? 7 : count))
      .filter(count => this.filterResultCount(count));
  }
}

export default LottoModel;
