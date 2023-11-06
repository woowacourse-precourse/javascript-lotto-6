/* eslint-disable default-case */
import { Console, Random } from '@woowacourse/mission-utils';
import App from './App.js';

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
      const app = new App();
      return app.getLotto();
    }
  }

  compareNumbers(published) {
    const compare = this.#numbers.filter(x => published.includes(x));
    return compare.length;
  }
}

  
  
const calculateRate = () => {
    let gain = 0;
    for (let i = 0; i < 5; i += 1) {
      gain += (this.PublishedLottoes.rank[i] * this.PublishedLottoes.GAIN[i]);
    }
    const rate = gain / (this.PublishedLottoes.numbers.length * 1e3);
    return Math.round((rate * 10) / 10);
  }
  
const printResults = () => {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.PublishedLottoes.rank.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.PublishedLottoes.rank.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.PublishedLottoes.rank.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.PublishedLottoes.rank.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.PublishedLottoes.rank.first}개`);
    Console.print(`총 수익률은 ${this.calculateRate()}입니다.`);
  }


export default Lotto;
