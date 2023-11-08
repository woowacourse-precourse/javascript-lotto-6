import { MissionUtils } from '@woowacourse/mission-utils';
import { STAGES, TEXTVIEW, CONST_VALUE } from './Db.js';
import ERROR from './ErrorDb.js';
import Service from './Service.js';

const serviceInst = Service.getInstance();

const errorController = {
  setErrorStage: function checkErrorType(e) {
    if (e === ERROR.WRONG_AMOUNT_MONEY) {
      return ERROR.STAGES.WRONG_AMOUNT_MONEY;
    }
    if (e === ERROR.WRONG_INPUT_TYPE) {
      return ERROR.STAGES.WRONG_INPUT_TYPE;
    }
    if (e === ERROR.INPUT_RANGE) {
      return ERROR.STAGES.INPUT_RANGE;
    }
    if (e === ERROR.INPUT_SIZE) {
      return ERROR.STAGES.INPUT_SIZE;
    }
    MissionUtils.Console.print(e.message);
    return 99;
  },

  moneyValidate: (value) => {
    const numericValue = parseInt(value, 10);
    if (!/^\d+$/.test(value)) {
      throw ERROR.WRONG_INPUT_TYPE;
    }
    if (numericValue <= 0 || numericValue % CONST_VALUE.LOTTO_PRICE !== 0) {
      throw ERROR.WRONG_AMOUNT_MONEY;
    }

    return numericValue;
  },

  winNumValidate: (value) => {
    const parsNumArr = [];
    const numArr = String(value).split(',');
    const areAllStringsNumbers = numArr.some((numStr) => /^\d+$/.test(numStr));
    if (!areAllStringsNumbers) {
      throw ERROR.WRONG_INPUT_TYPE;
    }
    const areAllInRange = numArr.every((numStr) => {
      const num = parseInt(numStr, 10);
      parsNumArr.push(num);
      return num >= 1 && num <= 45;
    });
    if (!areAllInRange) {
      throw ERROR.INPUT_RANGE;
    }
    return parsNumArr;
  },

  bonusNumValidate: (value) => {
    const numericValue = parseInt(value, 10);
    if (!/^\d+$/.test(value)) {
      throw ERROR.WRONG_INPUT_TYPE;
    }
    if (numericValue <= 0 || numericValue > 45) {
      throw ERROR.INPUT_RANGE;
    }
    return numericValue;
  },
};

const stageController = {
  stage1Controller: async function MoneyAmountInput() {
    const money = await MissionUtils.Console.readLineAsync(TEXTVIEW.REQUEST_MONEYINPUT);
    const moneyNum = errorController.moneyValidate(money);
    await serviceInst.switchStage(STAGES.NUM_1, moneyNum);
  },
  stage2Controller: function ShowLottoList() {
  },
  stage3Controller: async function requestWinNum() {
    const winNums = await MissionUtils.Console.readLineAsync(TEXTVIEW.REQUEST_LOTTOWIN);
    const winNumsArr = errorController.winNumValidate(winNums);
    await serviceInst.switchStage(STAGES.NUM_3, winNumsArr);
  },
  stage4Controller: async function requestWinNum() {
    const bonusNum = await MissionUtils.Console.readLineAsync(TEXTVIEW.REQUEST_LOTTOBONUS);
    const bonusPasInt = errorController.bonusNumValidate(bonusNum);
    await serviceInst.switchStage(STAGES.NUM_4, bonusPasInt);
  },
};

class Controller {
  static getInstance() {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }

  constructor() {
    Controller.instance = this;
    Object.freeze(Controller.instance);
  }

  async switchStage(stageNum) {
    try {
      switch (stageNum) {
        case STAGES.NUM_1:
          await stageController.stage1Controller();
          return STAGES.NUM_2;
        case STAGES.NUM_2:
          break;
        case STAGES.NUM_3:
          await stageController.stage3Controller();
          return STAGES.NUM_4;
        case STAGES.NUM_4:
          await stageController.stage4Controller();
          return STAGES.NUM_5;
        default:
      }
    } catch (e) {
      return errorController.setErrorStage(e);
    }

    return 0;
  }
}

export default Controller;
