import { Console } from "@woowacourse/mission-utils";

const InputView = {
  readMoney: async () => {
    const answer = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return answer;
  },
};
export default InputView;
