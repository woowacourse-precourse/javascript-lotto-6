import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants/gameMessage.js";
import NUMBERS from "../constants/numbers.js";
import userLottoOutput from "../view/output/userLottoOutput.js";

const createNumbers = (lottoAmount) => {
  Console.print(`\n${lottoAmount}${GAME_MESSAGE.bought}`);
  const numberOfLottos = Array.from({ length: lottoAmount }, () =>
    randomLotto()
  );
  userLottoOutput(numberOfLottos);
  return numberOfLottos;
};

const randomLotto = () => {
  return Random.pickUniqueNumbersInRange(
    NUMBERS.start_number,
    NUMBERS.end_number,
    NUMBERS.piece
  ).sort((a, b) => a - b);
};

export default createNumbers;
