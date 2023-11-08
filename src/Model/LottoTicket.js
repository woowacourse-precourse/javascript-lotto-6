import ValidatorFactory from '../Validator/index.js';

class LottoTicket {
  static #instance;
  #winNums;
  #bonusNum;
  #ticket;

  static getInstance() {
    if (!LottoTicket.#instance) {
      LottoTicket.#instance = new LottoTicket();
    }
    return LottoTicket.#instance;
  }

  get winNums() {
    return this.#winNums ? Array.from(this.#winNums) : [];
  }

  get bonusNum() {
    return this.#bonusNum ? this.#bonusNum : '';
  }

  get ticket() {
    return this.#ticket ? Array.from(this.#ticket) : [];
  }

  /**
   *
   * @param {'win' | 'bonus' | 'ticket'} type
   * @param { number | number[]} data
   */
  saveSpecificTypeData(type, data) {
    const verifiedData = this.#verifyData(type, data);
    switch (type) {
      case 'ticket':
        this.#ticket = verifiedData;
        break;
      case 'win':
        this.#winNums = verifiedData;
        break;
      case 'bonus':
        this.#bonusNum = verifiedData;
        break;
      default:
        throw new Error("[ERROR] : 로또 티켓이 저장할 수 있는 타입의 데이터는 'win','bonus','ticket'의 데이터만 저장이 가능합니다.");
    }
  }

  #verifyData(type, data) {
    if (type === 'ticket') return data;

    const validator = ValidatorFactory.initialize(type);
    if (type === 'bonus') {
      return validator.evaluate(data, this.winNums);
    }
    return validator.evaluate(data);
  }
}

export default LottoTicket;
