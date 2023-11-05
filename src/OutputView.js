import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
  printError(error) {
    return MissionUtils.Console.print(error);
  },
};

export default InputView;
