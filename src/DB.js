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

const RESULT= Object.freeze({
  NUM_3: [3, 0],
  NUM_4: [4, 1],
  NUM_5: [5, 2],
  NUM_5_BONUS: [7, 3],
  NUM_6: [6, 4],
});

const REWARD = [ 5000, 50000 , 1500000, 30000000, 2000000000];

const TEXTVIEW = Object.freeze({
  REQUEST_MONEYINPUT: '구입금액을 입력해 주세요.\n',
  LOTTO_AMOUNT: '개를 구매했습니다.',
  REQUEST_LOTTOWIN: '당첨 번호를 입력해주세요.\n',
  REQUEST_LOTTOBONUS: '보너스 번호를 입력해주세요.\n',
  RESULT: ([win3, win4, win5, win5Bonus, win6, percent]) => `3개 일치 (5,000원) - ${win3}개
4개 일치 (50,000원) - ${win4}개
5개 일치 (1,500,000원) - ${win5}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${win5Bonus}개
6개 일치 (2,000,000,000원) - ${win6}개
총 수익률은 ${percent}%입니다.`,
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
  RESULT_ARR: [0,0,0,0,0,0],
});



class Data {
  static instance;

  #lottoBuy = INITIAL_VALUES.ARR;

  #lottoWin = INITIAL_VALUES.OBJECT;

  #lottoBonus = INITIAL_VALUES.NUM;

  #lottoCnt = INITIAL_VALUES.NUM;

  #moneyInput = INITIAL_VALUES.NUM;

  #result = INITIAL_VALUES.RESULT_ARR;

  resetData() {
    this.#moneyInput = INITIAL_VALUES.NUM;
    this.#lottoBonus = INITIAL_VALUES.NUM;
    this.#lottoBuy = INITIAL_VALUES.ARR;
    this.#lottoCnt = INITIAL_VALUES.NUM;
    this.#lottoWin = INITIAL_VALUES.OBJECT;
  }

  get result() {
    return this.#result;
  }

  set result(value) {
    this.#result = value;
  }

  resultAdd(idx){
    if(idx === null)return;
    this.#result[idx] += 1;
  }

  resultPercent(){
    let sum = 0;
    for(let i = 0; i < this.#result.length - 1; i += 1){
      sum += this.#result[i] * REWARD[i];
    }
    sum = sum * 100 / this.#moneyInput;
  
    let formattedSum = sum.toFixed(1);
    

    formattedSum = formattedSum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    this.#result[5] = formattedSum;
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
  TEXTVIEW, db as Data, STAGES, INITIAL_VALUES, CONST_VALUE, RESULT,
};
