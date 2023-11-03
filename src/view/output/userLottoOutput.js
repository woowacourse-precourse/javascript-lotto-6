import { Console } from "@woowacourse/mission-utils";

const userLottoOutput = (numbers) => {
  numbers.forEach((value) => {
    Console.print(`[${value.join(", ")}]`);
  });
};

export default userLottoOutput;
