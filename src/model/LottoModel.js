import { Random, Console } from '@woowacourse/mission-utils';
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

  initializeResultObject() {
    this.initObject = Object.fromEntries(Array.from({ length: 5 }, (_, i) => i + 3).map(v => [v, 0]));
  }

  calculateResultObject() {
    this.result.reduce((acc, value) => this.updateResultObject(acc, value), this.initObject);
  }

  updateResultObject(acc, value) {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }

  printResults() {
    [3, 4, 5, 7, 6].forEach(count => this.printResult(count));

    const totalPrize = Object.entries(this.initObject).reduce(
      (acc, [count, frequency]) => this.calculateTotalPrize(acc, count, frequency),
      0
    );

    const roi = (totalPrize / this.purchaseAmount) * 100;
    Console.print(`총 수익률은 ${roi.toFixed(1)}%입니다.`);
  }

  printResult(count) {
    const frequency = this.initObject[count] || 0;
    const prize = prizeMapping[count] || '0원';
    const matchType = count === 7 ? '5개 일치, 보너스 볼 일치' : `${count}개 일치`;
    Console.print(`${matchType} (${prize.toLocaleString()}원) - ${frequency}개`);
  }

  calculateTotalPrize(acc, count, frequency) {
    const prize = prizeMapping[count] || 0;
    return acc + prize * frequency;
  }
}

const prizeMapping = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000, // 6개 일치
  7: 30000000, // 5개 일치, 보너스 볼 일치
};

export default LottoModel;
