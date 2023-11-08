import { Console } from "@woowacourse/mission-utils";

const InputView = {
  readMoney: async () => {
    const answer = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return answer;
  },
  readNumbers: async () => {
    const answer = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    return answer.split(",").map((number) => Number(number));
  },
  readBonus: async () => {
    const answer = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return answer;
  },
};
export default InputView;
