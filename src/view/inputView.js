import { Console } from "@woowacourse/mission-utils";
import { generateLotto, isBonusValid, isMoneyValid } from "../utils/index";
import Lotto from "../utils/Lotto";

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

export { inputWinNumbers, inputBonusNumber, amountOfLottos, inputMoney };
