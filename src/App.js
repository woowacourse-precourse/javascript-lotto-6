/* eslint-disable default-case */
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

class App {


  async play() {
    const count = await inputAmount() / 1000;
    publishLotto(count);
    printLottoNumbers();
    this.getLotto();
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



const app = new App();
app.play();

export default App;
