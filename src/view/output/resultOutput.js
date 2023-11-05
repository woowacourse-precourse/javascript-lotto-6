import { Console } from "@woowacourse/mission-utils";
import { GAME_RESULT } from "../../constants/gameMessage.js";

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
    Console.print(`${message}${rank[4 - i]}${piece}`);
  });

  Console.print(`${money_return}${profit}${text_end}`);
};

export default resultOutput;
