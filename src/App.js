/* eslint-disable default-case */
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const count = await inputAmount() / 1000;
    publishLotto(count);
    printLottoNumbers();
    const lotto = await this.getLotto();
    const bonus = Number(await getBonus(lotto));
    getRank(lotto, bonus);
    const rate = calculateRate();
    console.log(rate);
    printResults(styleRate(rate));
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
  rank : [0, 0, 0, 0, 0], // [1등, 2등, 3등, 4등, 5등]
  GAIN : [2e9, 3e7, 15e5, 5e4, 5e3]
}

const inputAmount = async() => {
  const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  const WARNING = '[ERROR] 잘못된 형식입니다. 로또 1장에 1000원이며 거스름돈은 지불되지 않으니, 1000의 배수인 정수를 입력하시오.\n'
  try {
    if (isNaN(input)) throw new Error(WARNING);
    if ((input % 1000) !== 0) throw new Error(WARNING);
    if (input == 0 || '') throw new Error(WARNING)
  } catch {
    Console.print(WARNING);
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

const getBonus = async(lotto) => {
  const bonus = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  const WARNING = '[ERROR] 잘못된 형식입니다. 앞서 입력한 번호와 겹치지 않는 1~45 안의 정수를 입력하시오.\n'
  try {
    if (isNaN(bonus)) throw new Error(WARNING);
    if (bonus > 45 || bonus < 1) throw new Error(WARNING);
    if (!Number.isInteger(bonus)) throw new Error(WARNING);
    if (lotto.numbers(bonus)) throw new Error(WARNING);
  } catch {
    Console.print(WARNING);
    await getBonus(lotto);
  }
  return bonus;
}

const organizeRank = (lotto, published, bonus) => {
  const result = lotto.compareNumbers(published);
  switch(result) {
    case 6 :
      PublishedLottoes.rank[0] += 1;
      break;
    case 5 :
      if (published.includes(bonus)) {
        PublishedLottoes.rank[1] += 1;
        break;
      }
      PublishedLottoes.rank[2] += 1;
      break;
    case 4 : 
      PublishedLottoes.rank[3] += 1;
      break;
    case 3 :
      PublishedLottoes.rank[4] += 1;
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
  return rate;
}

const printResults = (rate) => {
  Console.print('당첨 통계\n---');
  Console.print(`3개 일치 (5,000원) - ${PublishedLottoes.rank[4]}개`);
  Console.print(`4개 일치 (50,000원) - ${PublishedLottoes.rank[3]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${PublishedLottoes.rank[2]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${PublishedLottoes.rank[1]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${PublishedLottoes.rank[0]}개`);
  Console.print(`총 수익률은 ${rate}%입니다.`);
}

const styleRate = (rate) => {
  const rateFormat = Intl.NumberFormat('en-US').format(rate.toFixed(1));
  if (rate - Math.floor(rate) === 0) return `${rateFormat}.0`
  return rateFormat;
}

const app = new App();
app.play();

export default App;
