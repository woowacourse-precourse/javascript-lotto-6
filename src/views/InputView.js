import { Console } from "@woowacourse/mission-utils";

export const InputView = {
  async price() {
    const price = await Console.readLineAsync('구입할 금액을 알려주세요.\n');
    return Number(price);
  },
  async win() {
    const numbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return numbers.split(',').map(Number);
  },
  async bonus() {
    const number = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    return Number(number);
  },
}