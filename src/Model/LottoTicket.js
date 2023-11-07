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
    const vertifiedData = this.vertifyData(type, data);
    switch (type) {
      case ('ticket'):
        this.#ticket = vertifiedData;
        break;
      case ('win'):
        this.#winNums = vertifiedData;
        break;
      case ('bonus'):
        this.#bonusNum = vertifiedData;
        break;
      default:
        throw new Error('[ERROR]');
    }
  }

  vertifyData(type, data) {
    if (type === 'ticket') return data;

    const validator = ValidatorFactory.initialize(type);
    if (type === 'bonus') {
      return validator.evaluate(data, this.winNums);
    }
    return validator.evaluate(data);
  }
}

export default LottoTicket;
