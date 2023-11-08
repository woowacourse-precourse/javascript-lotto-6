import Lotto from './Lotto.js';

const STAGES = Object.freeze({
  NUM_1: 1,
  NUM_2: 2,
  NUM_3: 3,
  NUM_4: 4,
  NUM_5: 5,
  NUM_6: 6,
  EXIT: 7,
});

const TEXTVIEW = Object.freeze({
  REQUEST_MONEYINPUT: '구입금액을 입력해 주세요. ',
  LOTTO_AMOUNT: '개를 구매했습니다.',
  REQUEST_LOTTOWIN: '당첨 번호를 입력해주세요.\n',
  REQUEST_LOTTOBONUS: '보너스 번호를 입력해주세요.\n',
  RESULT: ([win3, win4, win5, win5Bonus, win6, percent]) => `
    당첨 통계\n
    ---\n
    3개 일치 (5,000원) - ${win3}\n
    4개 일치 (50,000원) - ${win4}\n
    5개 일치 (1,500,000원) - ${win5}\n
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${win5Bonus}\n
    6개 일치 (2,000,000,000원) - ${win6}\n
    총 수익률은 ${percent}%입니다.
  `,
});

const CONST_VALUE = Object.freeze({
  LOTTO_PRICE: 1000,
  LOTTO_LENGTH: 6,
  LOTTO_RANGE_START: 1,
  LOTTO_RANGE_END: 45,
});

const INITIAL_VALUES = Object.freeze({
  NUM: 0,
  ARR: [],
  OBJECT: {},
});

class Data {
  static instance;

  #lottoBuy = INITIAL_VALUES.ARR;

  #lottoWin = INITIAL_VALUES.OBJECT;

  #lottoBonus = INITIAL_VALUES.NUM;

  #lottoCnt = INITIAL_VALUES.NUM;

  #moneyInput = INITIAL_VALUES.NUM;

  resetData() {
    this.#moneyInput = INITIAL_VALUES.NUM;
    this.#lottoBonus = INITIAL_VALUES.NUM;
    this.#lottoBuy = INITIAL_VALUES.ARR;
    this.#lottoCnt = INITIAL_VALUES.NUM;
    this.#lottoWin = INITIAL_VALUES.OBJECT;
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
    const addLotto = new Lotto(value);
    this.#lottoBuy = [...this.#lottoBuy, addLotto];
  }

  textLottoBuy() {
    let text = '';
    this.#lottoBuy.forEach((lotto) => {
      text = `${text}[${lotto.getNumbers()}]\n`;
    });
    return text;
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

const db = new Data();

export {
  TEXTVIEW, db as Data, STAGES, INITIAL_VALUES, CONST_VALUE,
};
