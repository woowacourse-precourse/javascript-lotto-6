import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto";
import SETTINGS from "../constants/settings";

class LottoController {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async play() {
    const totalPrice = await this.getTotalPrice();
    const totalCount = parseInt(totalPrice / SETTINGS.priceUnit);
    const lottos = getLottos(totalCount);
    const lottosData = getLottosData(lottos);
    this.outputView.printLottos(totalCount, lottosData);

    const targetNumbers = await getTargetNumbers();
    const bonusNumber = await getBonusNumber();
    const result = getResult(lottos, targetNumbers, bonusNumber);
    const income = getIncome(result);
    const incomeData = getIncomeData(income, totalPrice);
    this.outputView.printResult(incomeData, result);
  }

  async getTotalPrice() {
    const totalPrice = await this.inputView.read("구입금액을 입력해 주세요.\n");
    try {
      validateTotalPrice(totalPrice);
    } catch ({ message }) {
      Console.print(message);
      this.getTotalPrice();
    }
    return totalPrice;
  }
}

const validateTotalPrice = (price) => {
  if (Number.isNaN(price)) {
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
  }
  if (price % 1000 !== 0) {
    throw new Error("[ERROR] 1,000 단위로 입력해 주세요.");
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

const getLottosData = (lottos) => {
  const lottosData = lottos.map(
    (lotto) => `[${lotto.getNumbers().join(", ")}]`
  );
  return lottosData;
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
    throw new Error("[ERROR] 6자리 길이로 입력해 주세요.");
  }
  if (numbers.length !== numbersSet.size) {
    throw new Error("[ERROR] 중복된 숫자 없이 입력해 주세요.");
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
    throw new Error("[ERROR] 숫자를 입력해 주세요.");
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

const getIncomeData = (income, totalPrice) => {
  return ((income / totalPrice) * 100).toLocaleString("ko-KR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};

export default LottoController;
