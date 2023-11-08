import { MissionUtils } from '@woowacourse/mission-utils';
import { STAGES, TEXTVIEW, CONST_VALUE } from './Db.js';
import ERROR from './ErrorDb.js';
import View from './View.js';
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
    return null;
  },

  moneyValidate: (value) => {
    if (!/^\d+$/.test(value)) {
      throw ERROR.WRONG_INPUT_TYPE;
    }

    const numericValue = parseInt(value, 10);
    if (numericValue <= 0 || numericValue % CONST_VALUE.LOTTO_PRICE !== 0) {
      throw ERROR.WRONG_AMOUNT_MONEY;
    }
    return parseInt(value, 10);
  },
};

const stageController = {
  stage1Controller: async function MoneyAmountInput() {
    let money = await MissionUtils.Console.readLineAsync(TEXTVIEW.REQUEST_MONEYINPUT);
    money = errorController.moneyValidate(money);
    serviceInst.switchStage(STAGES.NUM_1, money);
  },
  stage2Controller: function ShowLottoList() {
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
    switch (stageNum) {
      case STAGES.NUM_1:
        try {
          await stageController.stage1Controller();
        } catch (e) {
          return errorController.setErrorStage(e);
        }
        return STAGES.NUM_2;
      case STAGES.NUM_2:
        break;
      case STAGES.NUM_3:
        break;
      default:
    }
    return 0;
  }
}

export default Controller;
