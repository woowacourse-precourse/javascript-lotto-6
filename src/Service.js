import { MissionUtils } from '@woowacourse/mission-utils';
import { Data, CONST_VALUE, STAGES } from './Db.js';
import Lotto from './Lotto.js';

const db = Data.getInstance();

const methodForService = {
  getLottoNums: async function chooseRandomNumLotto() {
    let numSet = new Set();
    let numbers = [];
    while (numSet.size !== CONST_VALUE.LOTTO_LENGTH) {
      numSet.clear();
      numbers = await MissionUtils.Random.pickUniqueNumbersInRange(
        CONST_VALUE.LOTTO_RANGE_START,
        CONST_VALUE.LOTTO_RANGE_END,
        CONST_VALUE.LOTTO_LENGTH,
      );
      numSet = new Set(numbers);
    }
    return numbers;
  },
};

const stageService = {
  stage1Service: async function buyLotto(money) {
    db.moneyInput = money;
    db.lottoCnt = money / CONST_VALUE.LOTTO_PRICE;

    let tmpLottos = [];
    for (let i = 0; i < db.lottoCnt; i += 1) {
      tmpLottos = await methodForService.getLottoNums();
      db.addLottoBuy(tmpLottos);
    }
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
    db.resetData();
    Service.instance = this;
    Object.freeze(Service.instance);
  }

  async switchStage(stageNum, value) {
    switch (stageNum) {
      case STAGES.NUM_1:
        await stageService.stage1Service(value);
        // console.log(db.lottoBuy[2].getNumbers());
        break;
      default:
        break;
    }
  }
}

export default Service;
