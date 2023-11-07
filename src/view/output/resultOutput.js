import { Console } from "@woowacourse/mission-utils";
import { GAME_RESULT } from "../../constants/gameMessage.js";
import NUMBERS from "../../constants/numbers.js";

const {
  piece,
  hyphon,
  text_end,
  result,
  money_return,
  three_matching,
  four_matching,
  five_matching,
  bonus_five_matching,
  six_matching,
} = GAME_RESULT;
const { array_all_index } = NUMBERS;

const resultOutput = (rank, profit) => {
  const messages = [
    three_matching,
    four_matching,
    five_matching,
    bonus_five_matching,
    six_matching,
  ];

  Console.print(result);
  Console.print(hyphon);

  messages.forEach((message, i) => {
    Console.print(`${message}${rank[array_all_index - i]}${piece}`);
  });

  Console.print(`${money_return}${profit}${text_end}`);
};

export default resultOutput;
