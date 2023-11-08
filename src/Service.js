import { MissionUtils } from '@woowacourse/mission-utils';
import { CONST_VALUE, STAGES, Data, RESULT} from './DB.js';
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

  setCntResult: async function writeLottoWinResult(num, arr) {
    if(num === RESULT.NUM_5[0]){
      const containsBonus = arr.includes(Data.lottoBonus);
      if(containsBonus){
        return RESULT.NUM_5_BONUS[1];
      }
      return RESULT.NUM_5[1];
    }
    if(num === RESULT.NUM_3[0]){
      return RESULT.NUM_3[1];
    }
    if(num === RESULT.NUM_4[0]){
      return RESULT.NUM_4[1];
    }
    if(num === RESULT.NUM_6[0]){
      return RESULT.NUM_6[1];
    }
    return null;
    
  },

  checkResult: async  function lottoWinCheck(idx) {

    const winArr = Data.lottoWin.getNumArr();
    const chckLotto = Data.lottoBuy[idx].getNumArr();
    const numSet = new Set(winArr.concat(chckLotto));
    
    const chkNum = CONST_VALUE.LOTTO_LENGTH + CONST_VALUE.LOTTO_LENGTH - numSet.size;
    const idxSet = await methodForService.setCntResult(chkNum, chckLotto);
    Data.resultAdd(idxSet);
  },

  percentChk: async function calculPercent() {
    Data.resultPercent();
  }

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
  stage5Service: async function makeResult( ) {
    for(let i = 0 ;i < Data.lottoBuy.length ; i += 1){
      await methodForService.checkResult(i);
    }
    await methodForService.percentChk();
  }
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
      case STAGES.NUM_5:
        await stageService.stage5Service();
        break;
      default:
        break;
    }
  }
}

export default Service;
