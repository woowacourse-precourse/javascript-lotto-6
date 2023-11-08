import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants/gameMessage.js";
import NUMBERS from "../constants/numbers.js";
import SYMBOLS from "../constants/symbols.js";
import userLottoOutput from "../view/output/userLottoOutput.js";

const { newline } = SYMBOLS;
const { bought } = GAME_MESSAGE;
const { start_number, end_number, piece } = NUMBERS;

const createNumbers = (lottoAmount) => {
  Console.print(`${newline}${lottoAmount}${bought}`);
  const numberOfLottos = Array.from({ length: lottoAmount }, () =>
    randomLotto()
  );
  userLottoOutput(numberOfLottos);
  return numberOfLottos;
};

const randomLotto = () => {
  return Random.pickUniqueNumbersInRange(start_number, end_number, piece).sort(
    (a, b) => a - b
  );
};

export default createNumbers;
