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
      return inputLottoNumbers();
    }
  
  }

  compareNumbers(published) {
    const compare = this.#numbers.filter(x => published.includes(x));
    return compare.length;
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

const PublishedLottos = {
  numbers : [],
  rank : {
    first : 0,
    second : 0,
    third : 0,
    forth : 0,
    fifth : 0
  }
}

const publishLotto = (count) => {
  for (let i = 0; i < count; i += 1) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    PublishedLottos.numbers.push(numbers);
  }
}

const getLotto = async() => {
  const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  const inputNumbers = input.split(',').map(Number);
  const lotto = new Lotto(inputNumbers);
  return lotto;
}

const getBonus = async() => {
  const bonus = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  return bonus;
}

const getRank = async(lotto, bonus) => {
  for (let i = 0; i < PublishedLotto.numbers.length; i += 1) {
    const result = lotto.compareNumbers(PublishedLotto.numbers[i]);
    organizeRank(result);
    if (result === 5 && PublishedLotto.numbers.includes(bonus)) {
      PublishedLotto.rank[2] -= 1;
      PublishedLotto.rank[1] += 1;
    }
  }
}

const organizeRank = (result) => {
  switch(result) {
    case 6 :
      PublishedLotto.rank[0] += 1;
      break;
    case 5 : 
      PublishedLotto.rank[2] += 1;
      break;
    case 4 :
      PublishedLotto.rank[3] += 1;
      break;
    case 3 :
      PublishedLotto.rank[4] += 1;
      break;
  }
}




export default Lotto;
