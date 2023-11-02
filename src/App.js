import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
class App {
  async play() {
    const totalPrice = await getTotalPrice();

    const totalCount = parseInt(totalPrice / 1000);
    Console.print(`${totalCount}개를 구매했습니다.`);

    const lottos = getLottos(totalCount);
    printLottos(lottos);

    const targetNumbers = getTargetNumbers();
    const bonusNumber = getBonusNumber();
    const result = getResult(lottos, targetNumbers, bonusNumber);
    const income = getIncome(result);
    printResult(totalPrice, income, result);
  }
}

const getTotalPrice = async () => {
  const totalPrice = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  validateTotalPrice(totalPrice);
  return totalPrice;
};

const validateTotalPrice = (price) => {
  if (price % 1000) {
    throw new Error("[ERROR] 구입 금액이 1,000원 단위가 아닙니다.");
  }
  if (Number.isNaN(price)) {
    throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
  }
};

const getLottos = (counts) => {
  const lottos = [];
  for (let count = 0; count < counts; count++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    const lotto = new Lotto(numbers);
    lottos.push(lotto);
  }
  return lottos;
};

const printLottos = (lottos) => {
  for (let lotto of lottos) {
    const numbers = lotto.getNumbers();
    Console.print(numbers);
  }
};

const getTargetNumbers = async () => {
  const targetNumbers = await Console.readLineAsync(
    "당첨 번호를 입력해 주세요.\n"
  );
  validateTargetNumbers(targetNumbers);
  return targetNumbers;
};

const validateTargetNumbers = (numbers) => {
  const numbers = numbers.split(",");
  const numbersSet = Set(numbers);
  if (numbers.length != 6) {
    throw new Error("[ERROR] 당첨 번호는 6자리입니다.");
  }
  if (numbers.length != numbersSet.length) {
    throw new Error("[ERROR] 당첨 번호는 중복된 숫자가 있을 수 없습니다.");
  }
};

const getBonusNumber = async () => {
  const bonusNumber = await Console.readLineAsync(
    "보너스 번호를 입력해 주세요.\n"
  );
  validateBonusNumbers(bonusNumber);
  return bonusNumber;
};

const validateBonusNumbers = (number) => {
  if (Number.isNaN(number)) {
    throw new Error("[ERROR] 보너스 번호는 숫자입니다.");
  }
};

const getResult = (lottos, targetNumbers, bonusNumber) => {
  const result = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  for (let lotto of lottos) {
    const [correctTarget, correctBonus] = calculateResult(
      lotto,
      targetNumbers,
      bonusNumber
    );
    judgeResult(correctTarget, correctBonus, result);
  }
  return result;
};

const calculateResult = (lotto, targetNumbers, bonusNumber) => {
  let corretTarget = 0;
  let corretBonus = 0;
  for (let targetNumber of targetNumbers) {
    if (lotto.includes(targetNumber)) corretTarget += 1;
  }
  if (lotto.includes(bonusNumber)) corretBonus += 1;

  return [corretTarget, corretBonus];
};

const judgeResult = (correctTarget, correctBonus, result) => {
  if (correctTarget == 6) result[1] += 1;
  if (correctTarget == 5 && correctBonus) result[2] += 1;
  if (correctTarget == 5 && !correctBonus) result[3] += 1;
  if (correctTarget == 4) result[4] += 1;
  if (correctTarget == 3) result[5] += 1;
};

const getIncome = (result) => {
  return (
    result[5] * 5000 +
    result[4] * 50000 +
    result[3] +
    1500000 +
    result[2] * 30000000 +
    result[1] * 2000000000
  );
};

const printResult = (totalPrice, income, result) => {
  Console.print(`3개 일치 (5,000원) - ${result[5]}개`);
  Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result[3]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result[1]}개`);
  Console.print(`총 수익률은 ${(income / totalPrice).toFixed(1)}%입니다.`);
};

export default App;
