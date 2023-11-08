import { Console } from "@woowacourse/mission-utils";
import {
  inputBonusNumber,
  inputMoney,
  inputWinNumbers,
  amountOfLottos,
  printResult,
} from "../view/index";
import { compareLottos } from "../model/index";

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
