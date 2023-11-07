const STAGE_NUM_1 = 1;
const STAGE_NUM_2 = 2;
const STAGE_NUM_3 = 3;
const STAGE_NUM_4 = 4;
const STAGE_NUM_5 = 5;
const STAGE_NUM_6 = 6;

const INITIALIZE_NUM = 0;
const INITIALIZE_ARR = [];
const INITIALIZE_OBJECT = {};

const TEXTVIEW_REQUEST_MONEYINPUT = '구입금액을 입력해 주세요';
const TEXTVIEW_LOTTO_AMOUNT = '개를 구매했습니다.';
const TEXTVIEW_REQUEST_LOTTOWIN = '당첨 번호를 입력해주세요.';
const TEXTVIEW_REQUEST_LOTTOBONUS = '보너스 번호를 입력해주세요.';
const TEXTVIEW_RESULT = ([win3, win4, win5, win5Bonus, win6, percent]) => `
당첨 통계\n
---\n
3개 일치 (5,000원) - ${win3}\n
4개 일치 (50,000원) - ${win4}\n
5개 일치 (1,500,000원) - ${win5}\n
5개 일치, 보너스 볼 일치 (30,000,000원) - ${win5Bonus}\n
6개 일치 (2,000,000,000원) - ${win6}\n
총 수익률은 ${percent}%입니다.
`;

class Data {
  #dataResetNeed = false;

  #lottoBuy = INITIALIZE_ARR;

  #lottoWin = INITIALIZE_OBJECT;

  #lottoBonus = INITIALIZE_NUM;

  #lottoCnt = INITIALIZE_NUM;

  #moneyInput = INITIALIZE_NUM;

  getInstance() {
    if (!Data.instance) {
      Data.instance = new Data();
      Object.freeze(Data.instance);
      this.#dataResetNeed = true;
      return Data.instance;
    }

    if (this.#dataResetNeed) {
      this.#moneyInput = INITIALIZE_NUM;
      this.#lottoBonus = INITIALIZE_NUM;
      this.#lottoBuy = INITIALIZE_ARR;
      this.#lottoCnt = INITIALIZE_NUM;
      this.#lottoWin = INITIALIZE_OBJECT;
    }
    return Data.instance;
  }

  constructor() {
    this.#moneyInput = INITIALIZE_NUM;
    this.#lottoBonus = INITIALIZE_NUM;
    this.#lottoBuy = INITIALIZE_ARR;
    this.#lottoCnt = INITIALIZE_NUM;
    this.#lottoWin = INITIALIZE_OBJECT;
  }

  get moneyInput() {
    return this.#moneyInput;
  }

  set moneyInput(value) {
    this.#moneyInput = value;
  }

  get lottoBonus() {
    return this.#lottoBonus;
  }

  set lottoBonus(value) {
    this.#lottoBonus = value;
  }

  get lottoBuy() {
    return this.#lottoBuy;
  }

  set lottoBuy(value) {
    this.#lottoBuy = value;
  }

  addLottoBuy(value) {
    this.#lottoBuy = [...this.#lottoBuy, value];
  }

  get lottoCnt() {
    return this.#lottoCnt;
  }

  set lottoCnt(value) {
    this.#lottoCnt = value;
  }

  get lottoWin() {
    return this.#lottoWin;
  }

  set lottoWin(value) {
    this.#lottoWin = value;
  }
}

export {
  Data, STAGE_NUM_1, STAGE_NUM_2, STAGE_NUM_3, STAGE_NUM_4, STAGE_NUM_5, STAGE_NUM_6,
};
