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
    return new Lotto(convertToArr);
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

const compareLottos = (lottos, winNumbers, bonusNumber) => {
  let max = 0;

  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < winNumbers.length; j++) {}
  }
};

const printResult = (amount) => {
  Console.print("당첨 통계");
  Console.print("---");
  Console.print("3개 일치 (5,000원) - 1개");
  Console.print("4개 일치 (50,000원) - 0개");
  Console.print("5개 일치 (1500,000원) - 1개");
  Console.print("5개 일치, 보너스 불 일치 (30,000,000원) - 0개");
  Console.print("6개 일치 (2,000,000,000원) - 0개");
  Console.print("총 수익률은 62.5%입니다.");
};

const game = async () => {
  const amount = await inputMoney();
  const winNumbers = await inputWinNumbers();
  const bonusNumber = await inputBonusNumber();
  const lottos = generateLotto(amount);
  compareLottos(lottos, winNumbers, bonusNumber);
  printResult(amount);
};

export default game;
