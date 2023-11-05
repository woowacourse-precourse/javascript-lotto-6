import { Console, Random } from "@woowacourse/mission-utils";
import { isMoneyValid } from "./validation";

let COUNT = 0;

const generateLotto = (amountOfLotto, numbers, number) => {
  for (let i = 0; i < amountOfLotto; i++) {
    let myLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    Console.print(myLotto);
    // for (let j = 0; j < numbers.length; j++) {
    //   if (myLotto[i] === numbers[j]) {
    //     COUNT++;
    //   }
    // }
  }
};

const inputWinNumbers = async () => {
  const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
  Console.print(`당첨 번호를 입력해 주세요. \n${input}`);
};

const inputBonusNumber = async () => {
  const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
  Console.print(`보너스 번호를 입력해 주세요. \n${input}`);
};

const inputMoney = async () => {
  const input = await Console.readLineAsync("구입금액을 입력해 주세요.");
  Console.print(`구입금액을 입력해 주세요. \n${input}`);

  const amountOfLotto = input / 1000;

  if (isMoneyValid(input) === "ERROR") {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  Console.print(`${amountOfLotto}개를 구매했습니다.`);

  return amountOfLotto;
};

const compareLottos = () => {};

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
  const numbers = await inputWinNumbers();
  const number = await inputBonusNumber();
  generateLotto(amount, numbers, number);
  printResult(amount);
};

export default game;
