/* eslint-disable default-case */
import { Console, Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    try {
      if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } catch {
      return this.getLotto();
    }
  }

  compareNumbers(published) {
    const compare = this.#numbers.filter(x => published.includes(x));
    return compare.length;
  }
  
  PublishedLottoes = {
    numbers : [],
    rank : {
      first : 0,
      second : 0,
      third : 0,
      fourth : 0,
      fifth : 0
    },
    GAIN : {
      FIRST : 2e9,
      SECOND : 3e7,
      THIRD : 15e5,
      FOURTH : 5e4,
      FIFTH : 5e3
    }
  }
  
  publishLotto = (count) => {
    for (let i = 0; i < count; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      this.PublishedLottoes.numbers.push(numbers);
    }
  }
  
  getLotto = async() => {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const inputNumbers = input.split(',').map(Number);
    const lotto = new Lotto(inputNumbers);
    return lotto;
  }
  
  getBonus = async() => {
    const bonus = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return bonus;
  }
  
  organizeRank = (lotto, published, bonus) => {
    const result = lotto.compareNumbers(published);
    switch(result) {
      case 6 :
        this.PublishedLottoes.rank.first += 1;
        break;
      case 5 :
        if (published.includes(bonus)) {
          this.PublishedLottoes.rank.second += 1;
          break;
        }
        this.PublishedLottoes.rank.third += 1;
        break;
      case 4 : 
        this.PublishedLottoes.rank.forth += 1;
        break;
      case 3 :
        this.PublishedLottoes.rank.fifth += 1;
        break;
    }
  }
  
  getRank = (lotto, bonus) => {
    this.PublishedLottoes.forEach((published) => {
      organizeRank(lotto, published, bonus);
    });
  }
  
  calculateRate = () => {
    let gain = 0;
    for (let i = 0; i < 5; i += 1) {
      gain += (this.PublishedLottoes.rank[i] * this.PublishedLottoes.GAIN[i]);
    }
    const rate = gain / (this.PublishedLottoes.numbers.length * 1e3);
    return Math.round((rate * 10) / 10);
  }
  
  printResults = () => {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.PublishedLottoes.rank.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.PublishedLottoes.rank.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.PublishedLottoes.rank.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.PublishedLottoes.rank.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.PublishedLottoes.rank.first}개`);
    Console.print(`총 수익률은 ${this.calculateRate()}입니다.`);
  }
}

export default Lotto;
