import { MissionUtils } from "@woowacourse/mission-utils";

class View {

  static async inputAmountOfMoney() {
    const inputAmount = await MissionUtils.Console.readLineAsync('구입 금액을 입력해 주세요.\n')
    return inputAmount;
  } 
}

export default View;