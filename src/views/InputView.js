import { Console } from "@woowacourse/mission-utils";

const Input = {
  async price() {
    const price = await Console.readLineAsync('구입할 금액을 알려주세요.');
    return Number(price);
  },
  async win() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    return numbers.map(Number(number)).split(',');
  },
  async bonus() {
    const number = await Console.readLineAsync('보너스 번호를 입력해 주세요.');
    return Number(number);
  },
}