import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto";
import SETTINGS from "../constants/settings";
import MESSAGES from "../constants/messages";

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

    const targetNumbers = await this.getTargetNumbers();
    const bonusNumber = await getBonusNumber();
    const result = getResult(lottos, targetNumbers, bonusNumber);
    const income = getIncome(result);
    const incomeData = getIncomeData(income, totalPrice);
    this.outputView.printResult(incomeData, result);
  }

  async getTotalPrice() {
    const totalPrice = await this.inputView.read(MESSAGES.buyPrice);
    try {
      validateTotalPrice(totalPrice);
    } catch ({ message }) {
      this.outputView.print(message);
      this.getTotalPrice();
    }
    return totalPrice;
  }

  async getTargetNumbers() {
    const targetNumbers = await this.inputView.read(MESSAGES.targetNumber);
    try {
      validateTargetNumbers(targetNumbers.split(","));
    } catch ({ message }) {
      this.outputView.print(message);
      this.getTargetNumbers();
    }
    return targetNumbers;
  }
}

const validateTotalPrice = (price) => {
  if (Number.isNaN(price)) {
    throw new Error(MESSAGES.error.notNumber);
  }
  if (price % 1000 !== 0) {
    throw new Error(MESSAGES.error.invalidPriceUnit);
  }
};

const getLottos = (counts) => {
  const lottos = [];
  for (let count = 0; count < counts; count++) {
    const numbers = Random.pickUniqueNumbersInRange(
      SETTINGS.targetNumber.minimum,
      SETTINGS.targetNumber.maximum,
      SETTINGS.targetNumber.count
    );
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

const validateTargetNumbers = (numbers) => {
  const numbersSet = new Set(numbers);
  if (numbers.length !== 6)
    throw new Error(MESSAGES.error.invalidTargetNumbersLength);
  if (numbers.length !== numbersSet.size)
    throw new Error(MESSAGES.error.notDuplicateTargetNumbers);
};

const getBonusNumber = async () => {
  const bonusNumber = await Console.readLineAsync(MESSAGES.bonusNumber);
  validateBonusNumbers(bonusNumber);
  return bonusNumber;
};

const validateBonusNumbers = (number) => {
  if (Number.isNaN(number)) throw new Error(MESSAGES.error.notNumber);
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
  if (correctTarget == SETTINGS.targetNumber.count) result[1] += 1;
  if (correctTarget == SETTINGS.targetNumber.count - 1 && correctBonus)
    result[2] += 1;
  if (correctTarget == SETTINGS.targetNumber.count - 1 && !correctBonus)
    result[3] += 1;
  if (correctTarget == SETTINGS.targetNumber.count - 2) result[4] += 1;
  if (correctTarget == SETTINGS.targetNumber.count - 3) result[5] += 1;
};

const getIncome = (result) => {
  return (
    result[5] * SETTINGS.income.fifth +
    result[4] * SETTINGS.income.fourth +
    result[3] * SETTINGS.income.third +
    result[2] * SETTINGS.income.second +
    result[1] * SETTINGS.income.first
  );
};

const getIncomeData = (income, totalPrice) => {
  return ((income / totalPrice) * 100).toLocaleString("ko-KR", {
    minimumFractionDigits: SETTINGS.digit,
    maximumFractionDigits: SETTINGS.digit,
  });
};

export default LottoController;
