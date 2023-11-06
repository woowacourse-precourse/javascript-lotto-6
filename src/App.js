import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const money = await buyLotto();
      validateMoney(money);
      const data = makeNumbers(money);
      showNumbersList(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;

const buyLotto = async () => {
  const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return parseInt(money);
};

const validateMoney = (money) => {
  const input_money = money;
  const isRight = input_money % 1000;
  if (isNaN(isRight)) throw new Error('[ERROR] 숫자만 입력 가능 합니다.');
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
