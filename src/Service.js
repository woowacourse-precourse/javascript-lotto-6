import { MissionUtils } from '@woowacourse/mission-utils';
import { CONST_VALUE, STAGES, Data } from './Db.js';
import Lotto from './Lotto.js';

const methodForService = {
  getLottoNums: async function chooseRandomNumLotto() {
    let numbers = [];
    numbers = await MissionUtils.Random.pickUniqueNumbersInRange(
      CONST_VALUE.LOTTO_RANGE_START,
      CONST_VALUE.LOTTO_RANGE_END,
      CONST_VALUE.LOTTO_LENGTH,
    );
    return numbers;
  },
};

const stageService = {
  stage1Service: async function buyLotto(money) {
    Data.moneyInput = money;
    Data.lottoCnt = money / CONST_VALUE.LOTTO_PRICE;
    let tmp;
    let idx = 0;
    while (idx < Data.lottoCnt) {
      tmp = await methodForService.getLottoNums();
      Data.addLottoBuy(tmp);
      idx += 1;
    }
  },
  stage3Service: async function setWinLotto(winNumArr) {
    Data.lottoWin = new Lotto(winNumArr);
  },
  stage4Service: async function setBonusNum(num) {
    Data.lottoBonus = num;
  },
};

class Service {
  static getInstance() {
    if (!Service.instance) {
      Service.instance = new Service();
    }
    return Service.instance;
  }

  constructor() {
    Service.instance = this;
    Object.freeze(Service.instance);
  }

  async switchStage(stageNum, value) {
    switch (stageNum) {
      case STAGES.NUM_1:
        await stageService.stage1Service(value);
        break;
      case STAGES.NUM_3:
        await stageService.stage3Service(value);
        break;
      case STAGES.NUM_4:
        await stageService.stage4Service(value);
        break;
      default:
        break;
    }
  }
}

export default Service;
