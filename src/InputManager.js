import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

const InputManager = {
  async inputPrice() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.");

    return price;
  },
};

export default InputManager;
