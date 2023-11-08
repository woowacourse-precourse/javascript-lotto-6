import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    try {
      const money = await buyLotto();
      const user_lotto_list = makeNumbers(money);
      showNumbersList(user_lotto_list);
      const lotto = await makeWinningNumbers();
      lotto.showResult(user_lotto_list);
      lotto.showRateOfReturn(user_lotto_list);
    } catch (error) {
      console.log(error);
    }
  }
}

const buyLotto = async () => {
  const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  validateMoney(money);
  return parseInt(money);
};

export const validateMoney = (money) => {
  const input_money = money;
  if (!isNumber(money)) throw new Error('[ERROR] 숫자만 입력 가능 합니다.');
  if (input_money % 1000 !== 0) throw new Error('[ERROR] 1,000원 단위로 입력 가능합니다.');
};

const makeNumbers = (money) => {
  let cur_money = money;
  const total_Numbers_arr = [];

  while (cur_money > 0) {
    const numbers = genRandomNumbers(6);
    total_Numbers_arr.push(numbers);
    cur_money -= 1000;
  }
  return total_Numbers_arr;
};

const genRandomNumbers = (length) => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, length);
  numbers.sort((a, b) => a - b);
  return numbers;
};

const showNumbersList = (list) => {
  let result = `${list.length}개를 구매했습니다.\n`;
  list.forEach((numbers) => {
    result += `[${numbers.join(', ')}]\n`;
  });
  Console.print(result);
};

const makeWinningNumbers = async () => {
  const winning_numbers_arr = [];
  const input_winning_numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  const input_bonus_number = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

  input_winning_numbers.split(',').forEach((num) => {
    winning_numbers_arr.push(parseInt(num));
  });
  winning_numbers_arr.sort((a, b) => a - b);
  validateWinningNumbers(winning_numbers_arr);
  const lotto = new Lotto(winning_numbers_arr);
  lotto.setBonusNumber(parseInt(input_bonus_number));

  return lotto;
};

function isNumber(input) {
  return /^[0-9]+$/.test(input);
}

const validateWinningNumbers = (numbers) => {
  numbers.forEach((num) => {
    if (num < 1 || 45 < num) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (!isNumber(num)) {
      throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    }
  });
};

export default App;
