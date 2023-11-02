import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async play() {
    const totalPrice = await getTotalPrice();
    const totalCount = parseInt(totalPrice / 1000);
    const lottos = getLottos(totalCount);
    printLottos(totalCount, lottos);

    const targetNumbers = await getTargetNumbers();
    const bonusNumber = await getBonusNumber();
    const result = getResult(lottos, targetNumbers, bonusNumber);
    const income = getIncome(result);
    printResult(totalPrice, income, result);
  }
}

const getTotalPrice = async () => {
  const totalPrice = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  try {
    validateTotalPrice(totalPrice);
  } catch ({ message }) {
    Console.print(message);
    getTotalPrice();
  }
  return totalPrice;
};

const validateTotalPrice = (price) => {
  if (isNaN(price)) {
    throw new Error("[ERROR]");
  }
  if (price % 1000 !== 0) {
    throw new Error("[ERROR]");
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

const printLottos = (totalCount, lottos) => {
  Console.print(`${totalCount}개를 구매했습니다.`);
  for (let lotto of lottos) {
    const numbers = lotto.getNumbers();
    Console.print(`[${numbers.join(", ")}]`);
  }
};

const getTargetNumbers = async () => {
  const targetNumbers = await Console.readLineAsync(
    "당첨 번호를 입력해 주세요.\n"
  );
  try {
    validateTargetNumbers(targetNumbers.split(","));
  } catch ({ message }) {
    Console.print(message);
    getTargetNumbers();
  }
  return targetNumbers;
};

const validateTargetNumbers = (numbers) => {
  const numbersSet = new Set(numbers);
  if (numbers.length !== 6) {
    throw new Error("[ERROR]");
  }
  if (numbers.length !== numbersSet.size) {
    throw new Error("[ERROR]");
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
    throw new Error("[ERROR]");
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
    const numbers = lotto.getNumbers();
    const [correctTarget, correctBonus] = calculateResult(
      numbers,
      targetNumbers,
      bonusNumber
    );
    judgeResult(correctTarget, correctBonus, result);
  }
  return result;
};

const calculateResult = (numbers, targetNumbers, bonusNumber) => {
  let corretTarget = 0;
  let corretBonus = 0;
  for (let targetNumber of targetNumbers) {
    if (numbers.includes(Number(targetNumber))) corretTarget += 1;
  }
  if (numbers.includes(Number(bonusNumber))) corretBonus += 1;
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
    result[3] * 1500000 +
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
  Console.print(
    `총 수익률은 ${((income / totalPrice) * 100).toLocaleString("ko-KR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}%입니다.`
  );
};

export default App;
