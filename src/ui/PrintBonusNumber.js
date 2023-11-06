import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";

const printBonusNumber = async () => {
  let bonusLotto = await Console.readLineAsync(
    Messages.GET_BONUS_NUMBER_MESSAGE
  );
  return Number(bonusLotto);
};

export default printBonusNumber;
