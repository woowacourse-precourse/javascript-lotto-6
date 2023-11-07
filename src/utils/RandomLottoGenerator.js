import { MissionUtils } from "@woowacourse/mission-utils";
import { GameSetting } from "../constants/constant.js";

export const RandomLottoGenerator = () => {
  const LOTTO = MissionUtils.Random.pickUniqueNumbersInRange(
    GameSetting.lotto_Min_Number,
    GameSetting.lotto_Max_Number,
    GameSetting.lotto_Length
  );
  return LOTTO;
};
