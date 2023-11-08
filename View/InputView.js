import { Console } from "@woowacourse/mission-utils";

const INPUT_MESSAGE = {
  INPUT_PURSHASE_COST: "구매금액을 입력해 주세요\n",
  INPUT_LOTTO: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_LOTTO: "보너스 번호를 입력해 주세요.\n",
};

const InputView = {
  async inputPurchaseCost() {
    return await Console.readLineAsync(INPUT_MESSAGE.INPUT_PURSHASE_COST);
  },

  async inputLotto() {
    return await Console.readLineAsync(INPUT_MESSAGE.INPUT_LOTTO);
  },

  async inputBonusLotto() {
    return await Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUS_LOTTO);
  },
};

export default InputView;
