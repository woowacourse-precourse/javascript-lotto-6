import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async purchaseAmount(callback) {
    await Console.readLineAsync("구입금액을 입력해 주세요.\n").then((input) => {
      callback(input);
    });
  },
};

export default InputView;
