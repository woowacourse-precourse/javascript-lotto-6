import { MissionUtils } from '@woowacourse/mission-utils';

const LottoMaker = {
  generate(quantity) {
    const lottos = [];
    while (lottos.length < quantity) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(lotto);
    }
    return lottos;
  },
};

export default LottoMaker;
