import { MissionUtils } from "@woowacourse/mission-utils";

const LottoMachine = () => {
  const generateLottoNumbers = () => {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  };

  const sortLottoNumbers = (lottoNumbers) => {
    return lottoNumbers.sort((a, b) => a - b);
  };

  return { generateLottoNumbers, sortLottoNumbers };
};

export default LottoMachine;
