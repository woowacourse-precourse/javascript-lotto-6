/* eslint-disable default-case */
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

class App {


  async play() {
    const count = await inputAmount() / 1000;
    publishLotto(count);
    printLottoNumbers();
    const lotto = await this.getLotto();
    const bonus = Number(await getBonus());
    getRank(lotto, bonus);
    const rate = calculateRate();
    printResults(rate);
  }

  getLotto = async() => {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const inputNumbers = input.split(',').map(Number);
    const lotto = new Lotto(inputNumbers);
    return lotto;
  }
}

const PublishedLottoes = {
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

const inputAmount = async() => {
  const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  try {
    if (isNaN(input)) throw new Error('[ERROR]');
    if ((input % 1000) !== 0) throw new Error('[ERROR]');
  } catch {
    Console.print('[ERROR]');
    return inputAmount();
  }
  return input;
}

const publishLotto = (count) => {
  for (let i = 0; i < count; i += 1) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    PublishedLottoes.numbers.push(numbers);
  }
}

const printLottoNumbers = () => {
  Console.print(`\n${PublishedLottoes.numbers.length}개를 구매했습니다.`);
  PublishedLottoes.numbers.forEach((number) => {
    Console.print(number);
  })
}

const getBonus = async() => {
  const bonus = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  return bonus;
}

const organizeRank = (lotto, published, bonus) => {
  const result = lotto.compareNumbers(published);
  switch(result) {
    case 6 :
      PublishedLottoes.rank.first += 1;
      break;
    case 5 :
      if (published.includes(bonus)) {
        PublishedLottoes.rank.second += 1;
        break;
      }
      PublishedLottoes.rank.third += 1;
      break;
    case 4 : 
      PublishedLottoes.rank.forth += 1;
      break;
    case 3 :
      PublishedLottoes.rank.fifth += 1;
      break;
  }
}

const getRank = (lotto, bonus) => {
  PublishedLottoes.numbers.forEach((number) => {
    organizeRank(lotto, number, bonus);
  });
}

const calculateRate = () => {
  let gain = 0;
  for (let i = 0; i < 5; i += 1) {
    gain += (PublishedLottoes.rank[i] * PublishedLottoes.GAIN[i]);
  }
  const rate = gain / (PublishedLottoes.numbers.length * 1e3);
  return Math.round((rate * 10) / 10);
}
``
const printResults = (rate) => {
  Console.print('당첨 통계\n---');
  Console.print(`3개 일치 (5,000원) - ${PublishedLottoes.rank.fifth}개`);
  Console.print(`4개 일치 (50,000원) - ${PublishedLottoes.rank.fourth}개`);
  Console.print(`5개 일치 (1,500,000원) - ${PublishedLottoes.rank.third}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${PublishedLottoes.rank.second}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${PublishedLottoes.rank.first}개`);
  Console.print(`총 수익률은 ${rate}입니다.`);
}

const app = new App();
app.play();

export default App;
