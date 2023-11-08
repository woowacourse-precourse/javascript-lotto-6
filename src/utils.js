import { Console } from "@woowacourse/mission-utils";
import {
  duplicateError,
  GET_INPUT_MONEY,
  GET_INPUT_LOTTO,
  GET_INPUT_BONUS,
  ERROR_GET_INPUT_MONEY,
  ERROR_GET_INPUT_BONUS,
  COUNTS_MESSAGE,
} from "./message.js";
async function getMoney() {
  let isError = false;
  while (!isError) {
    try {
      const moneyInput = await Console.readLineAsync(GET_INPUT_MONEY);
      if (moneyInput % 1000 === 0) {
        Console.print(moneyInput / 1000 + COUNTS_MESSAGE);
        return moneyInput;
      }
      throw Error(ERROR_GET_INPUT_MONEY);
    } catch (error) {
      Console.print("[ERROR] 구입금액은 1000원 단위로 입력하셔야 합니다.");
    }
  }
}
async function getLottoAnswer() {
  let isError = false;
  while (!isError) {
    try {
      const lottoNumber = await Console.readLineAsync(GET_INPUT_LOTTO);
      const randomLotto = lottoNumber.split(",").map(Number);
      if (randomLotto.length !== 6)
        throw Error("[ERROR] 로또 번호는 6개여야 합니다.");
      checkSameNumber(randomLotto);
      Console.print("");
      isError = true;
      return randomLotto;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
function checkSameNumber(numbers) {
  if (new Set(numbers).size !== 6) throw Error(duplicateError);
  return;
}
async function getLottoBonus(lotto) {
  let isError = false;
  while (!isError) {
    try {
      const bonus = Number(await Console.readLineAsync(GET_INPUT_BONUS));
      if (bonus > 45 || bonus < 1 || lotto.indexOf(bonus) !== -1)
        throw Error(ERROR_GET_INPUT_BONUS);
      Console.print("");
      isError = true;
      return bonus;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export { getMoney, getLottoAnswer, getLottoBonus, checkSameNumber };
