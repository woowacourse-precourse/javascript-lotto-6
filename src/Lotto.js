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

const PublishedLotto = {
  numbers : [],
  rank : [0, 0, 0, 0, 0]
}

const publishLotto = (count) => {
  for (let i = 0; i < count; i += 1) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    PublishedLotto.numbers.push(numbers);
  }
}

const inputLottoNumbers = async() => {
  const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  const inputNumbers = input.split(',').map(Number);
  const lotto = new Lotto(inputNumbers);
  
}



export default Lotto;
