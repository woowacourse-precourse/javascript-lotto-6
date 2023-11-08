import { Console } from "@woowacourse/mission-utils";

const View = {
  async input(msg) {
    return await Console.readLineAsync(msg);
  },
  output(msg) {
    Console.print(msg);
  },
};

export default View;
