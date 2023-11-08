import { MissionUtils } from '@woowacourse/mission-utils';
import Controller from './Controller.js';
import { Data, STAGES, TEXTVIEW } from './Db.js';
import ERROR from './ErrorDb.js';

const controller = Controller.getInstance();

function errorView(stageNum) {
  switch (stageNum) {
    case ERROR.STAGES.WRONG_AMOUNT_MONEY:
      MissionUtils.Console.print(ERROR.WRONG_AMOUNT_MONEY.message);
      break;
    case ERROR.STAGES.WRONG_INPUT_TYPE:
      MissionUtils.Console.print(ERROR.WRONG_INPUT_TYPE.message);
      break;
    case ERROR.STAGES.INPUT_RANGE:
      MissionUtils.Console.print(ERROR.INPUT_RANGE.message);
      break;
    case ERROR.STAGES.INPUT_SIZE:
      MissionUtils.Console.print(ERROR.INPUT_SIZE);
      break;
    default:
  }
}

class PlayView {
  #now = STAGES.NUM_1;

  #before = STAGES.NUM_1;

  async viewFunction() {
    Data.resetData();
    while (this.#now !== STAGES.EXIT) {
      // eslint-disable-next-line no-await-in-loop
      await this.switchView(this.#now);
    }
  }

  async switchView(stageNum) {
    switch (stageNum) {
      case STAGES.NUM_1:
        this.#before = this.#now;
        this.#now = await this.#View.stage1View();
        break;
      case STAGES.NUM_2:
        this.#before = this.#now;
        this.#now = await this.#View.stage2View();
        break;
      case STAGES.NUM_3:
        this.#before = this.#now;
        this.#now = await this.#View.stage3View();
        break;
      case STAGES.NUM_4:
        this.#before = this.#now;
        this.#now = await this.#View.stage4View();
        break;
      default:
        errorView(stageNum);
        this.#now = this.#before;
        break;
    }
  }

  #View = {
    stage1View: async function requestMoneyView() {
      const tmp = await controller.switchStage(STAGES.NUM_1);
      return tmp;
    },
    stage2View: async function showLottoListView() {
      MissionUtils.Console.print(`${Data.lottoCnt}${TEXTVIEW.LOTTO_AMOUNT}\n${Data.textLottoBuy()}`);
      return STAGES.NUM_3;
    },
    stage3View: async function requestWinNumbers() {
      const tmp = await controller.switchStage(STAGES.NUM_3);
      return tmp;
    },
    stage4View: async function requestWinNumbers() {
      const tmp = await controller.switchStage(STAGES.NUM_4);
      return tmp;
    },
  };
}

export { PlayView };
