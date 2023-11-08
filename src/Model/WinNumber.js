import CODE from '../Constant/CODE.js';

export default class WinNumber {
  #commonNum;

  #bonusNum;

  setCommonNum(input) {
    this.#commonNum = input.split(CODE.splitCode).map((num) => Number(num));
  }

  setBonusNum(input) {
    this.#bonusNum = Number(input);
  }

  getCommonNum() {
    return this.#commonNum;
  }

  getBonusNum() {
    return this.#bonusNum;
  }
}
