import { Console, Random } from "@woowacourse/mission-utils";
import { isMoneyValid, isBonusValid } from "./validation";
import Lotto from "./Lotto";

let COUNT = 0;
let BONUS = 0;

const generateLotto = (amountOfLotto) => {
  let lottoArr = [];
  for (let i = 0; i < amountOfLotto; i++) {
    let myLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    Console.print(myLotto);
    lottoArr.push(myLotto);
  }
  return lottoArr;
};

const inputWinNumbers = async () => {
  try {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    Console.print(`당첨 번호를 입력해 주세요. \n${input}`);
    const convertToArr = input.split(",").map((e) => +e);
    const testLotto = new Lotto(convertToArr);
    return convertToArr;
  } catch (error) {
    Console.print(error.message);
    return inputWinNumbers();
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
    return inputBonusNumber();
  }
};

const inputMoney = async () => {
  try {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.");
    Console.print(`구입금액을 입력해 주세요. \n${input}`);
    const amountOfLotto = input / 1000;
    isMoneyValid(input);
    Console.print(`${amountOfLotto}개를 구매했습니다.`);
    return amountOfLotto;
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
  const matchingNumberArr = lottos.map((lotto) => {
    const matchingNumber2 = lotto.filter((number) =>
      winNumbers.includes(number)
    );
    return matchingNumber2.length;
  });

  const bonusArr = lottos.map((lotto) => {
    const temp2 = lotto.filter((number) => number === bonusNumber);
    return temp2.length;
  });

  return calculateResult(matchingNumberArr, bonusArr);
};

const printResult = (result) => {
  Console.print("당첨 통계");
  Console.print("---");
  Console.print(`3개 일치 (5,000원) - ${result.three}개`);
  Console.print(`4개 일치 (50,000원) - ${result.four}개`);
  Console.print(`5개 일치 (1500,000원) - ${result.bonus}개`);
  Console.print(`5개 일치, 보너스 불 일치 (30,000,000원) - ${result.five}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result.six}개`);
  Console.print(`총 수익률은 62.5%입니다.`);
};

const game = async () => {
  const amount = await inputMoney();
  const winNumbers = await inputWinNumbers();
  const bonusNumber = await inputBonusNumber();
  const lottos = generateLotto(amount);
  const result = compareLottos(lottos, winNumbers, bonusNumber);
  printResult(result);
};

export default game;
