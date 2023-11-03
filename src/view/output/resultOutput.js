import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../constants/gameMessage.js";

const resultOutput = (rank, profit) => {
  Console.print(`${GAME_MESSAGE.result}`);
  Console.print(`${GAME_MESSAGE.hyphon}`);
  Console.print(
    `${GAME_MESSAGE.three_matching}${rank[4]}${GAME_MESSAGE.piece}`
  );
  Console.print(`${GAME_MESSAGE.four_matching}${rank[3]}${GAME_MESSAGE.piece}`);
  Console.print(`${GAME_MESSAGE.five_matching}${rank[2]}${GAME_MESSAGE.piece}`);
  Console.print(
    `${GAME_MESSAGE.bonus_five_matching}${rank[1]}${GAME_MESSAGE.piece}`
  );
  Console.print(`${GAME_MESSAGE.six_matching}${rank[0]}${GAME_MESSAGE.piece}`);
  Console.print(
    `${GAME_MESSAGE.money_return}${profit}${GAME_MESSAGE.text_end}`
  );
};

export default resultOutput;
