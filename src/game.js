import { Console, Random } from "@woowacourse/mission-utils";
import { isMoneyValid, isBonusValid } from "./validation";
import Lotto from "./Lotto";

const generateLotto = () => {
  const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  const sortedLotto = randomLotto.sort((a, b) => a - b);
  return sortedLotto;
};
const inputWinNumbers = async () => {
  try {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    Console.print(`당첨 번호를 입력해 주세요. \n${input}`);
    const numbers = input.split(",").map((e) => +e);
    const test = new Lotto(numbers);
    return test.getLottos();
  } catch (error) {
    Console.print(error.message);
  }
};

const inputBonusNumber = async () => {
  try {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    Console.print(`보너스 번호를 입력해 주세요. \n${input}`);
    isBonusValid(input);
    return Number(input);
  } catch (error) {
    Console.print(error.message);
  }
};

const amountOfLottos = async () => {
  try {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.");
    Console.print(`구입금액을 입력해 주세요. \n${input}`);
    isMoneyValid(input);
    const amountOfLotto = input / 1000;
    return amountOfLotto;
  } catch (error) {
    Console.print(error.message);
  }
};

const inputMoney = async (amount) => {
  try {
    const lottos = Array.from({ length: amount }, () => generateLotto());
    const lottosInfo = lottos
      .map((lotto) => `[${lotto.join(", ")}]`)
      .join("\n");

    Console.print(`${amount}개를 구매했습니다.`);
    Console.print(lottosInfo);
    return lottos;
  } catch (error) {
    Console.print(error.message);
  }
};

const calculateCounts = (result, count) => {
  if (count === 3) {
    result.three++;
  }
  if (count === 4) {
    result.four++;
  }
  if (count === 5 && matchingNumberArr === 4) {
    result.bonus++;
  }
  if (count === 5 && matchingNumberArr === 5) {
    result.five++;
  }
  if (count === 6) {
    result.six++;
  }
  if (count === 0 || count === 1 || count === 2) {
    result.zero++;
  }
  return result;
};

const calculateResult = (matchingNumberArr, bonusArr) => {
  const result = {
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    bonus: 0,
    zero: 0,
  };
  for (let i = 0; i < matchingNumberArr.length; i++) {
    let count = matchingNumberArr[i] + bonusArr[i];
    calculateCounts(result, count);
  }
  return result;
};

const compareLottos = (lottos, winNumbers, bonusNumber) => {
  try {
    const matchingNumber = lottos.map((lotto) => {
      const matchingNumber2 = lotto.filter((number) =>
        winNumbers.includes(number)
      );
      return matchingNumber2.length;
    });
    const bonusArr = lottos.map((lotto) => {
      const temp2 = lotto.filter((number) => number === bonusNumber);
      return temp2.length;
    });
    return calculateResult(matchingNumber, bonusArr);
  } catch (error) {
    Console.print(error.message);
  }
};

const calculateProfitRatio = (result) => {
  const money = {
    zero: 0,
    three: 5000,
    four: 50000,
    five: 1500000,
    bonus: 30000000,
    six: 2000000000,
  };
  let total =
    money.three * result.three +
    money.four * result.four +
    money.five * result.five +
    money.bonus * result.bonus +
    money.six * result.six;

  return total;
};

const printResult = (result, amount) => {
  const profit = (
    (calculateProfitRatio(result) / (amount * 1000)) *
    100
  ).toFixed(1);
  Console.print("당첨 통계");
  Console.print("---");
  Console.print(`3개 일치 (5,000원) - ${result.three}개`);
  Console.print(`4개 일치 (50,000원) - ${result.four}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result.bonus}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.five}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result.six}개`);
  Console.print(`총 수익률은 ${profit}%입니다.`);
};

const game = async () => {
  try {
    const amount = await amountOfLottos();
    const lottos = await inputMoney(amount);
    const winNumbers = await inputWinNumbers();
    const bonusNumber = await inputBonusNumber();
    const result = compareLottos(lottos, winNumbers, bonusNumber);
    if (!isNaN(amount)) {
      printResult(result, amount);
    }
  } catch (error) {
    Console.print(error.message);
  }
};

export default game;
